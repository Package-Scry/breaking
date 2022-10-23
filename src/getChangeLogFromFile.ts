import findVersions from "find-versions"
import fetch from "node-fetch"
import { REG_X_HEADER } from "./constants.js"
import { getBreakingChange } from "./getBreakingChange.js"
import { ChangeLog } from "./getChangeLog.js"
import { marked } from "marked"

const fetchFileFromGitHub = async (url: string): Promise<string> => {
  try {
    console.log("fetching file from", url)
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
    // console.log(majorVersionHeader)
    const end = !nextVersionHeader
      ? changeLog.length
      : changeLog.indexOf(nextVersionHeader)

    return {
      version: findVersions(header, { loose: true })?.[0] ?? header,
        findVersions(majorVersionHeader, { loose: true })?.[0] ??
        majorVersionHeader,
      changes: {
        breaking: marked.parse(getBreakingChange(changeLog.slice(start, end))),
      },
    }
  })

export const getChangeLogFromFile = async (
  url: string
): Promise<ChangeLog[] | null> => {
  try {
    const changeLogString = await fetchFileFromGitHub(url)
    const headers: string[] = changeLogString?.match(REG_X_HEADER) ?? []
    const majorVersionHeaders = getMajorVersionHeaders(headers)

    console.log("--------")
    return majorChangeLogs
  } catch (error) {
    console.error(error)
    return null
  }
}
