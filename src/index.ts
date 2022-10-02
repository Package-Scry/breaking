import * as dotenv from "dotenv"
import express, { Request, Response } from "express"

dotenv.config()

import { ChangeLog, getChangeLog } from "./getChangeLog.js"

const port = 3000
const app = express()
app.use((req, res, next) => {
  express.json()(req, res, next)
})
export const getChangeLogs = async (
  npmPackages: { name: string; currentVersion: string }[]
): Promise<{ wasSuccessful: boolean; changeLogs: ChangeLog[][] }> => {
  const changeLogs = await Promise.all(
    npmPackages.map(async npmPackage => getChangeLog(npmPackage))
  )

  return { changeLogs, wasSuccessful: true }
}

app.post(
  "/changeLogs",
  async (
    req: Request<
      any,
      any,
      { packages: { name: string; currentVersion: string }[] }
    >,
    res: Response
  ) => {
    const { packages } = req.body
    const changeLogs = await getChangeLogs(packages)

    res.json(changeLogs)
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
