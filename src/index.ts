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

type ResponseChangeLogs = {
  name: string
  changeLogs: ChangeLog[]
}

export const getChangeLogs = async (
  npmPackages: { name: string; currentVersion: string }[]
): Promise<{ data: ResponseChangeLogs[] }> => {
  if (!Array.isArray(npmPackages)) throwError(ERROR_TYPES.INVALID, 400)

  const notEmptyPackages = npmPackages.filter(
    ({ name, currentVersion }) => name && currentVersion
  )

  if (notEmptyPackages.length === 0) throwError(ERROR_TYPES.INVALID, 400)

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
      const { message, code } = error as CustomError

      res.status(code).json({ message })
    }
  }
)

app.listen(port, () => {
  console.log(`Breaking app listening on port ${port}`)
})
