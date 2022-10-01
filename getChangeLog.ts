import { getChangeLogFromFile } from "./getChangeLogFromFile"
import { getChangeLogFromGitHub } from "./getChangeLogFromGithub"
import {
  getMajorVersion,
  getGitHubRepoUrl,
  getLatestMajorVersion,
} from "./utils"

export interface ChangeLog {
  version: string
  changes: {
    breaking: string | null
  }
}

export const getChangeLog = async (npmPackage: {
  name: string
  currentVersion: string
}) => {
  const { currentVersion: localVersion, name } = npmPackage
  try {
    const majorVersion = getMajorVersion(localVersion)

    const { wasSuccessful, url } = await getGitHubRepoUrl(name)

    if (!wasSuccessful || !url.includes("github"))
      throw new Error("Couldn't find repo url")

    const gitHubUrl: string = "https://github.com/zemirco/json2csv".replace(
      "github.com",
      "api.github.com/repos"
    )
    const latestMajorVersion = (await getLatestMajorVersion(gitHubUrl)) ?? 0
    const changeLogs = await getChangeLogFromGitHub(
      gitHubUrl,
      majorVersion + 1,
      latestMajorVersion
    )
    const localMajorVersionNumber = getMajorVersion(localVersion)
    const rawUrl = `${"https://github.com/zemirco/json2csv".replace(
      "github.com",
      "raw.githubusercontent.com"
    )}/master/CHANGELOG.md`

    const hasMissingChangeLog = changeLogs?.some(
      ({ changes: { breaking } }) => !!breaking
    )
    const missingChangeLogs = hasMissingChangeLog
      ? await getChangeLogFromFile(
          rawUrl,
          localMajorVersionNumber,
          latestMajorVersion
        )
      : []

    console.log("changeLogs")
    console.log(changeLogs)
    console.log("-------missingChangeLogs-------")
    console.log(missingChangeLogs)

    const combinedChangeLogs = changeLogs.map(changeLog => {
      if (!!changeLog.changes.breaking) return changeLog

      // const version = semverRegex().exec(changeLog.version)

      // const missingChangeLog = missingChangeLogs.find((changeLog) => {
      //   const missingVersion = semverRegex().exec(changeLog.version)

      //   return missingVersion === version
      // })

      return {
        ...changeLog,
        // changes: {
        //   breaking: missingChangeLog?.changes?.breaking,
        // },
      }
    })
  } catch (error) {
    console.log(error)
  }
}
