import { escapeRegExp, getHeaders, isTheSameHeader } from "./utils.js"

export const getBreakingChange = (changeLog: string): string | null => {
  const headers: string[] = getHeaders(changeLog)
  const breakingChangeIndex = headers.findIndex(header =>
    header.toLocaleLowerCase().includes("breaking")
  )
  const fallbackText = changeLog.replace(headers[0], "")

  if (breakingChangeIndex === -1) return fallbackText

  const headerCount = (
    headers[breakingChangeIndex].match(new RegExp("#", "g")) ?? []
  ).length

  const nextSameHeader = headers
    .slice(breakingChangeIndex + 1)
    .find(header => isTheSameHeader(header, headerCount))
  const nextBiggerHeader = headers
    .slice(breakingChangeIndex + 1)
    .find(header => header.match(new RegExp("#", "g")).length < headerCount)
  const isLastItem = !nextSameHeader && !nextBiggerHeader
  const start = changeLog.search(escapeRegExp(headers[breakingChangeIndex]))
  const end = isLastItem
    ? changeLog.length
    : changeLog.search(escapeRegExp(nextSameHeader ?? nextBiggerHeader))

  const breakingText = changeLog.slice(start, end).trim()
  return breakingText ? breakingText : fallbackText
}
