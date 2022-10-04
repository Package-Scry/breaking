import util from "util"
import { exec } from "child_process"
import findVersions from "find-versions"

const pExec = util.promisify(exec)

export const getMajorVersion = (text: string): number =>
  parseInt(findVersions(text, { loose: true })?.[0].split(".")[0] ?? "", 10)

export const getLatestMajorVersion = async (name: string) => {
  const { stdout, stderr } = await pExec(`yarn info  ${name} version --json`)

  if (stderr) {
    console.log("---------")
    console.log("error", stderr)
  }

  const version = getMajorVersion(JSON.parse(stdout)?.data) ?? 0

  return { wasSuccessful: !!stdout, version }
}

export const isTheSameHeader = (header: string, headerCount: number) =>
  (header.match(new RegExp("#", "g")) || []).length === headerCount

export const getGitHubRepoUrl = async (name: string) => {
  const { stdout, stderr } = await pExec(
    `yarn npm info ${name} -f repository --json`
  )

  if (stderr) {
    console.log("---------")
    console.log("error", stderr)
  }

  const url = JSON.parse(stdout)
    ?.repository?.url.replace("git+", "")
    .replace(".git", "")

  return { wasSuccessful: !!stdout, url }
}
