import { marked } from "marked"
import { isTheSameHeader } from "./utils"

export const getBreakingChange = (changeLog: string): string | null => {
  const regXHeader = /#{1,6}.+/g
  const headers: string[] = changeLog.match(regXHeader) ?? [""]
  const breakingChangeIndex = headers.findIndex((header) =>
    header.toLocaleLowerCase().includes("breaking")
  )

  if (breakingChangeIndex === -1) return null

  const headerCount = (
    headers[breakingChangeIndex].match(new RegExp("#", "g")) || []
  ).length
  const nextHeader = headers
    .slice(breakingChangeIndex + 1)
    .find((header) => isTheSameHeader(header, headerCount))
  const isLastItem = !nextHeader
  const start = changeLog.search(headers[breakingChangeIndex])
  const end = isLastItem ? changeLog.length : changeLog.search(nextHeader)
  const breakingText = changeLog.slice(start, end)

  return breakingText ? marked.parse(breakingText) : null
}
