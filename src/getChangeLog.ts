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
}): Promise<ChangeLog[]> => {
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
      ? await getChangeLogFromFile(rawUrl)
      : []

    // console.log("changeLogs")
    // console.log(changeLogs)
    // console.log("-------missingChangeLogs-------")
    // console.log(fileChangeLogs)

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
        const fallBack = `This version does't seem to have a proper changelog. You could try checking the following links:
        <ul><li><a href="${url}/blob/master/CHANGELOG.md" target="_blank">Changelog file</a></li>
        <li><a href="${url}/releases/tag/${`${versionToCheck}.0.0`}" target="_blank">Release changelog #1</a></li>
        <li><a href="${url}/releases/tag/${`v${versionToCheck}.0.0`}" target="_blank">Release changelog #2</a></li></ul>`

        return {
          ...releaseChangeLog,
          changes: {
            breaking:
              releaseChangeLog?.changes.breaking ??
              fileChangeLog?.changes.breaking ??
              fallBack,
          },
        }
      })

    // console.log("FINAL")
    // console.log(combinedChangeLogs)
    return combinedChangeLogs
  } catch (error) {
    console.error(error)
    return null
  }
}
