import { getChangeLog } from "./getChangeLog"

export const getChangeLogs = async (
  packageNames: { name: string; currentVersion: string }[]
) => {
  packageNames.forEach(async (npmPackage) => {
    getChangeLog(npmPackage)
  })

  return { wasSuccessful: true }
}
