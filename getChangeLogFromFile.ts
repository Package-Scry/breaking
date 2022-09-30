import semverRegex from "semver-regex"
import { REG_X_HEADER } from "./constants"
import { getBreakingChange } from "./getBreakingChange"
import { ChangeLog } from "./getChangeLog"
import { isTheSameHeader, getMajorVersion } from "./utils"

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
    const latestVersionIndex = headers.findIndex(header =>
      header.toLocaleLowerCase().includes(`${latestVersion}.0.0`)
    )
    const headerCount = (
      headers[latestVersionIndex].match(new RegExp("#", "g")) || []
    ).length
    const isVersionHeader = (header: string, headerCount: number) =>
      isTheSameHeader(header, headerCount) && semverRegex().test(header)
    const versionHeaders = headers.filter(
      header =>
        isVersionHeader(header, headerCount) &&
        getMajorVersion(header) > localVersion
    )

    const changeLogs = versionHeaders
      .filter(header => header.includes(".0.0"))
      .map(header => {
        const start = data.indexOf(header)
        const nextVersionHeader = data
          .slice(start + header.length)
          .match(REG_X_HEADER)
          ?.find(header => isVersionHeader(header, headerCount))
        const end = !nextVersionHeader
          ? data.length
          : data.indexOf(nextVersionHeader)

        return {
          version: semverRegex().exec(header)?.[0] ?? header,
          changes: {
            breaking: getBreakingChange(data.slice(start, end)),
          },
        }
      })

    return changeLogs
  } catch (error) {
    console.error(error)
    return null
  }
}
