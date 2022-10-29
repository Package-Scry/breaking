import * as dotenv from "dotenv"
import express, { Request, Response } from "express"

dotenv.config()

import { ChangeLog, getChangeLog } from "./getChangeLog.js"
import { CustomError, throwError } from "./error.js"
import { ERROR_TYPES } from "./constants.js"

const port = process.env.PORT ?? 3000
const app = express()

app.use((req, res, next) => {
  express.json()(req, res, next)
})
app.use((_, res, next) => {
  try {
    if (process.env.IS_MAINTENANCE_MODE === "true")
      throwError(
        ERROR_TYPES.MAINTENANCE,
        "Breaking API is under maintenance.",
        502
      )

    next()
  } catch (error) {
    const { type, message, code } = error as CustomError

    res.status(code).json({ type, message })
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

app.post(
  "/changeLogs",
  async (
    req: Request<
      unknown,
      unknown,
      { packages: { name: string; currentVersion: string }[] }
    >,
    res: Response
  ) => {
    try {
      const { packages } = req.body
      const changeLogs = await getChangeLogs(packages)

      res.status(200).json(changeLogs)
    } catch (error) {
      const { type, message, code } = error as CustomError

      res.status(code).json({ type, message })
    }
  }
)

app.post("*", (_, res) => {
  try {
    throwError(ERROR_TYPES.NOT_FOUND, "The requested route wasn't found.", 404)
  } catch (error) {
    const { type, message, code } = error as CustomError

    res.status(code).json({ type, message })
  }
})
app.get("*", (_, res) => {
  try {
    throwError(ERROR_TYPES.NOT_FOUND, "The requested route wasn't found.", 404)
  } catch (error) {
    const { type, message, code } = error as CustomError

    res.status(code).json({ type, message })
  }
})

app.listen(port, () => {
  console.log(`Breaking app listening on port ${port}`)
})
