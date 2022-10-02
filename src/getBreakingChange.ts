import { marked } from "marked"
import { REG_X_HEADER } from "./constants.js"
import { isTheSameHeader } from "./utils.js"

export const getBreakingChange = (changeLog: string): string | null => {
  const headers: string[] = changeLog.match(REG_X_HEADER) ?? [""]
  const breakingChangeIndex = headers.findIndex(header =>
    header.toLocaleLowerCase().includes("breaking")
  )
  const fallbackText = changeLog.replace(headers[0], "")

  if (breakingChangeIndex === -1) return fallbackText

  const headerCount = (
    headers[breakingChangeIndex].match(new RegExp("#", "g")) || []
  ).length
  const nextHeader = headers
    .slice(breakingChangeIndex + 1)
    .find(header => isTheSameHeader(header, headerCount))
  const isLastItem = !nextHeader
  const start = changeLog.search(headers[breakingChangeIndex])
  const end = isLastItem ? changeLog.length : changeLog.search(nextHeader)
  const breakingText = changeLog.slice(start, end)

  return breakingText ? marked.parse(breakingText) : fallbackText
}