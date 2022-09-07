import semverRegex from "semver-regex"
import util from "util"
import { exec } from "child_process"

const pExec = util.promisify(exec)

export const getMajorVersion = (text: string): number =>
  parseInt(semverRegex().exec(text)?.[0].split(".")[0] ?? "", 10)

export const getLatestMajorVersion = async (baseUrl: string) => {
  const response = await fetch(`${baseUrl}/releases/latest`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  const data = (await response.json()) as { tag_name?: string } | undefined
  const tag_name = data?.tag_name

  return tag_name ? getMajorVersion(tag_name) : null
}

export const isTheSameHeader = (header: string, headerCount: number) =>
  (header.match(new RegExp("#", "g")) || []).length === headerCount

export const getGitHubRepoUrl = async (name: string) => {
  const { stdout, stderr } = await pExec(
    `npm repo ${name} --browser=false --json`
  )

  if (stderr) {
    console.log("---------")
    console.log("error", stderr)
  }

  const url = JSON.parse(stdout)?.url.split("/").slice(0, 5).join("/")

  return { wasSuccessful: !!stdout, url }
}
