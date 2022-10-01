import { getChangeLog } from "./getChangeLog.js"

export const getChangeLogs = async (
  packageNames: { name: string; currentVersion: string }[]
) => {
  packageNames.forEach(async npmPackage => {
    getChangeLog(npmPackage)
  })

  return { wasSuccessful: true }
}

getChangeLogs([{ name: "json2csv", currentVersion: "1.0.0" }])
