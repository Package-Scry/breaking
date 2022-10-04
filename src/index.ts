import * as dotenv from "dotenv"
import express, { Request, Response } from "express"

dotenv.config()

import { ChangeLog, getChangeLog } from "./getChangeLog.js"

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
): Promise<{ wasSuccessful: boolean; data: ResponseChangeLogs[] }> => {
  const data = await Promise.all(
    npmPackages.map(async npmPackage => ({
      name: npmPackage.name,
      changeLogs: await getChangeLog(npmPackage),
    }))
  )

  return { data, wasSuccessful: true }
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
