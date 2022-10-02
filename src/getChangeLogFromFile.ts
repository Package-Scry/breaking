import findVersions from "find-versions"
import fetch from "node-fetch"
import { REG_X_HEADER } from "./constants.js"
import { getBreakingChange } from "./getBreakingChange.js"
import { ChangeLog } from "./getChangeLog.js"
import { isTheSameHeader, getMajorVersion } from "./utils.js"

export const getChangeLogFromFile = async (
  url: string,
  localVersion: number,
  latestVersion: number
): Promise<ChangeLog[] | null> => {
  try {
    console.log("fetching", url)
    const response = await fetch(url)
    const data: string = await response.text()
    const headers: string[] = data.match(REG_X_HEADER) ?? []
    const latestVersionIndex = headers.findIndex(
      header =>
        header.toLocaleLowerCase().includes(`${latestVersion}.0.0`) &&
        findVersions(header, { loose: true })?.[0].includes(
          `${latestVersion}.0.0`
        )
    )
    const headerCount = (
      headers[latestVersionIndex].match(new RegExp("#", "g")) || []
    ).length
    const isVersionHeader = (header: string, headerCount: number) =>
      isTheSameHeader(header, headerCount) &&
      findVersions(header, { loose: true }).length > 0
    const versionHeaders = headers.filter(
      header =>
        isVersionHeader(header, headerCount) &&
        getMajorVersion(header) > localVersion
    )
    const majorVersionHeaders = versionHeaders.filter(header =>
      findVersions(header, { loose: true })?.[0].includes(".0.0")
    )
    const majorChangeLogs = majorVersionHeaders.map(header => {
      const start = data.indexOf(header)
      const nextVersionHeader = data
        .slice(start + header.length)
        .match(REG_X_HEADER)
        ?.find(header => isVersionHeader(header, headerCount))
      const end = !nextVersionHeader
        ? data.length
        : data.indexOf(nextVersionHeader)

      return {
        version: findVersions(header, { loose: true })?.[0] ?? header,
        changes: {
          breaking: getBreakingChange(data.slice(start, end)),
        },
      }
    })

    return majorChangeLogs
  } catch (error) {
    console.error(error)
    return null
  }
}
