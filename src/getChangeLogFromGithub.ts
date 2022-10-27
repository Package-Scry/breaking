import { marked } from "marked"
import { getBreakingChange } from "./getBreakingChange.js"
import { ChangeLog } from "./getChangeLog.js"
import { getRelease } from "./github.js"

export const getChangeLogFromGitHub = async (
  owner: string,
  repo: string,
  version: number,
  latestVersion: number
): Promise<ChangeLog[]> => {
  const data =
    (await getRelease(owner, repo, `v${version}.0.0`)) ??
    (await getRelease(owner, repo, `${version}.0.0`))

  const body = data?.body
  const breakingHtml = marked.parse(body ? getBreakingChange(body) : null)
  const changeLog: ChangeLog = {
    version: `${version}.0.0`,
    changes: {
      breaking: breakingHtml,
    },
  }

  const hasReachedLatest = version >= latestVersion
  const newChangeLogs = hasReachedLatest
    ? []
    : await getChangeLogFromGitHub(owner, repo, version + 1, latestVersion)

  return [changeLog, ...newChangeLogs]
}
