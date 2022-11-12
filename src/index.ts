import * as dotenv from "dotenv"
import { Hono, Context, Next } from "hono"

dotenv.config()

import { ChangeLog, getChangeLog } from "./getChangeLog.js"
import { CustomError, throwError } from "./error.js"
import { ERROR_TYPES } from "./constants.js"

const port = process.env.PORT ?? 3000
const app = new Hono()

app.use(async (c: Context, next: Next) => {
  const json = c.json as Context.json

  try {
    if (process.env.IS_MAINTENANCE_MODE === "true")
      throwError(
        ERROR_TYPES.MAINTENANCE,
        "Breaking API is under maintenance.",
        502
      )

    await next()
  } catch (error) {
    const { type, message, code } = error as CustomError

    return json({ type, message }, code)
  }
})

app.use(async (c: Context, next: Next) => {
  const apiKey = c.req.headers.get("breaking-api-key")
  const json = c.json as Context.json

  try {
    if (apiKey !== process.env.PUBLIC_API_KEY)
      throwError(
        ERROR_TYPES.UNAUTHORIZED,
        "You're unauthorized to access the API without the proper key.",
        401
      )

    await next()
  } catch (error) {
    const { type, message, code } = error as CustomError

    return json({ type, message }, code)
  }
})

type ResponseChangeLogs = {
  name: string
  changeLogs: ChangeLog[]
}

export const getChangeLogs = async (
  npmPackages: { name: string; currentVersion: string }[]
): Promise<{ data: ResponseChangeLogs[] }> => {
  if (!Array.isArray(npmPackages))
    throwError(ERROR_TYPES.INVALID, "`packages` isn't an array", 400)
  if (npmPackages.length > 100)
    throwError(
      ERROR_TYPES.INVALID,
      "`packages` length shouldn't be more than 100",
      400
    )

  const notEmptyPackages = npmPackages.filter(
    ({ name, currentVersion }) => name && currentVersion
  )

  if (notEmptyPackages.length === 0)
    throwError(
      ERROR_TYPES.INVALID,
      "All items in `packages` are missing `name` or `currentVersion` keys",
      400
    )

  const data = await Promise.all(
    notEmptyPackages.map(async npmPackage => ({
      name: npmPackage.name,
      changeLogs: await getChangeLog(npmPackage),
    }))
  )

  return { data }
}

app.post("/changeLogs", async (c: Context) => {
  const { req } = c
  const json = c.json as Context.json

  try {
    const body = (await req.json()) as {
      packages: { name: string; currentVersion: string }[]
    }
    const { packages } = body
    const changeLogs = await getChangeLogs(packages)

    return json(changeLogs, 200)
  } catch (error) {
    const { type, message, code } = error as CustomError

    return json({ type, message }, code)
  }
})

app.post("*", (c: Context) => {
  const json = c.json as Context.json

  try {
    throwError(ERROR_TYPES.NOT_FOUND, "The requested route wasn't found.", 404)
  } catch (error) {
    const { type, message, code } = error as CustomError

    return json({ type, message }, code)
  }
})

app.get("*", (c: Context) => {
  const json = c.json as Context.json
  try {
    throwError(ERROR_TYPES.NOT_FOUND, "The requested route wasn't found.", 404)
  } catch (error) {
    const { type, message, code } = error as CustomError

    return json({ type, message }, code)
  }
})

app.listen(port, () => {
  console.log(`Breaking app listening on port ${port}`)
})
