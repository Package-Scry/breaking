import findVersions from "find-versions"
import fetch from "node-fetch"
import { getBreakingChange } from "./getBreakingChange.js"
import { ChangeLog } from "./getChangeLog.js"
import { marked } from "marked"
import { getHeaders } from "./utils.js"

const fetchFileFromGitHub = async (url: string): Promise<string> => {
  try {
    // console.log("fetching file from", url)
    const response = await fetch(url)
    const data: string = await response.text()

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getMajorVersionHeaders = (
  headers: string[],
  shouldIncludeAlphas: boolean = false
) =>
  headers.filter(header => {
    const version = findVersions(header, { loose: true })[0]
    const hasSuffix =
      header.split(version).length > 1 &&
      (header.split(version)[1].slice(0, 6) === "-alpha" ||
        header.split(version)[1].slice(0, 5) === "-beta")
    const isMajorVersionHeader =
      version?.includes(".0.0") && (!hasSuffix || shouldIncludeAlphas)

    return isMajorVersionHeader
  })

export const getMajorChangeLogs = (changeLog: string, headers: string[]) => {
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  return majorVersionHeaders.map(majorVersionHeader => {
    const start = changeLog.indexOf(majorVersionHeader)
    const nextVersionHeader = headers
      .slice(headers.findIndex(header => header === majorVersionHeader) + 1)
      .filter(header => !!findVersions(header, { loose: true })?.[0])[0]
    const end = !nextVersionHeader
      ? changeLog.length
      : changeLog.indexOf(nextVersionHeader)

    return {
      version:
        findVersions(majorVersionHeader, { loose: true })?.[0] ??
        majorVersionHeader,
      changes: {
        breaking: marked.parse(getBreakingChange(changeLog.slice(start, end))),
      },
    }
  })
}

export const getChangeLogFromFile = async (
  url: string
): Promise<ChangeLog[] | null> => {
  try {
    const changeLogString = await fetchFileFromGitHub(url)
    const headers: string[] = getHeaders(changeLogString)
    const majorChangeLogs = getMajorChangeLogs(changeLogString, headers)

    return majorChangeLogs
  } catch (error) {
    console.error(error)
    return null
  }
}
