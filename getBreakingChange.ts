import { marked } from "marked"
import { REG_X_HEADER } from "./constants"
import { isTheSameHeader } from "./utils"

export const getBreakingChange = (changeLog: string): string | null => {
  const headers: string[] = changeLog.match(REG_X_HEADER) ?? [""]
  const breakingChangeIndex = headers.findIndex(header =>
    header.toLocaleLowerCase().includes("breaking")
  )

  if (breakingChangeIndex === -1) return null

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

  return breakingText ? marked.parse(breakingText) : null
}
