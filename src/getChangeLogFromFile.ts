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

export const getChangeLogFromFile = async (
  url: string
): Promise<ChangeLog[] | null> => {
  try {
    const data = await fetchFileFromGitHub(url)
    const headers: string[] = data?.match(REG_X_HEADER) ?? []
    const majorVersionHeaders = headers.filter(header => {
      const version = findVersions(header, { loose: true })[0]
      const isMajorVersionHeader = version?.includes("0.0")

      return isMajorVersionHeader
    })

    const majorChangeLogs = majorVersionHeaders.map((header, i) => {
      const start = data.indexOf(header)
      const nextVersionHeader = majorVersionHeaders[i + 1]
      const end = !nextVersionHeader
        ? data.length
        : data.indexOf(nextVersionHeader)

      return {
        version: findVersions(header, { loose: true })?.[0] ?? header,
        changes: {
          breaking: marked.parse(getBreakingChange(data.slice(start, end))),
        },
      }
    })

    return majorChangeLogs
  } catch (error) {
    console.error(error)
    return null
  }
}
