import { getChangeLogFromFile } from "./getChangeLogFromFile.js"
import { getChangeLogFromGitHub } from "./getChangeLogFromGithub.js"
import {
  getMajorVersion,
  getGitHubRepoUrl,
  getLatestMajorVersion,
} from "./utils.js"

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
    const localMajorVersionNumber = getMajorVersion(localVersion)

    const { wasSuccessful, url } = await getGitHubRepoUrl(name)

    if (!wasSuccessful || !url.includes("github"))
      throw new Error("Couldn't find repo url")

    const owner = url.split("/").slice(-2, -1)[0]
    const { version: latestMajorVersionNumber } = await getLatestMajorVersion(
      name
    )
    const changeLogs = await getChangeLogFromGitHub(
      owner,
      name,
      localMajorVersionNumber + 1,
      latestMajorVersionNumber
    )
    const rawUrl = `${url.replace(
      "github.com",
      "raw.githubusercontent.com"
    )}/master/CHANGELOG.md`

    const hasMissingChangeLog = changeLogs?.some(
      ({ changes: { breaking } }) => !breaking
    )
    const fileChangeLogs = hasMissingChangeLog
      ? await getChangeLogFromFile(
          rawUrl,
          localMajorVersionNumber,
          latestMajorVersionNumber
        )
      : []

    console.log("changeLogs")
    console.log(changeLogs)
    console.log("-------missingChangeLogs-------")
    console.log(fileChangeLogs)

    const combinedChangeLogs = new Array(
      latestMajorVersionNumber - localMajorVersionNumber
    )
      .fill("")
      .map((_, i) => {
        const versionToCheck = localMajorVersionNumber + i + 1
        const releaseChangeLog = changeLogs.find(
          ({ version }) => version === `${versionToCheck}.0.0`
        )
        const fileChangeLog = fileChangeLogs.find(
          ({ version }) => version === `${versionToCheck}.0.0`
        )

        return {
          ...releaseChangeLog,
          changes: {
            breaking:
              releaseChangeLog?.changes.breaking ??
              fileChangeLog?.changes.breaking,
          },
        }
      })

    console.log("FINAL")
    console.log(combinedChangeLogs)
  } catch (error) {
    console.log(error)
  }
}
