import { getBreakingChange } from "./getBreakingChange"
import { ChangeLog } from "./getChangeLog"

type TSFixMe = any

export const getChangeLogFromGitHub = async (
  baseUrl: string,
  version: number,
  latestVersion: number
): Promise<ChangeLog[]> => {
  const fetchAndParseRelease = async (url: string) => {
    try {
      console.log("fetching", url)
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      const data = (await response.json()) as TSFixMe
      return data?.tag_name ? data : null
    } catch (error) {
      console.error(error)
    }
  }

  const data =
    (await fetchAndParseRelease(`${baseUrl}/releases/tags/v${version}.0.0`)) ??
    (await fetchAndParseRelease(`${baseUrl}/releases/tags/${version}.0.0`))

  const body: string = data?.body
  const breakingHtml = body ? getBreakingChange(body) : null

  console.log("bbb")
  console.log(breakingHtml)

  const changeLog: ChangeLog = {
    version: `${version}.0.0`,
    changes: {
      breaking: breakingHtml,
    },
  }

  const hasReachedLatest = version === latestVersion
  const newChangeLogs = hasReachedLatest
    ? []
    : await getChangeLogFromGitHub(baseUrl, version + 1, latestVersion)

  return [changeLog, ...newChangeLogs]
}
