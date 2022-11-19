import findVersions from "find-versions"
import { REG_X_HEADER } from "./constants.js"
import fetch from "node-fetch"

export const getMajorVersion = (text: string): number =>
  parseInt(findVersions(text, { loose: true })?.[0].split(".")[0] ?? "", 10)

export const getLatestMajorVersion = async (name: string) => {
  const url = `https://registry.npmjs.org/${name}`

  try {
    const response = await fetch(url)
    const data: unknown = await response.json()
    const latestVersion = parseInt(
      data?.["dist-tags"]?.latest?.split(".")[0],
      10
    )

    return { wasSuccessful: !!latestVersion, version: latestVersion }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const isTheSameHeader = (header: string, headerCount: number) =>
  (header.match(new RegExp("#", "g")) || []).length === headerCount

export const getGitHubRepoUrl = async (name: string) => {
  const url = `https://registry.npmjs.org/${name}`

  try {
    const response = await fetch(url)
    const data: any = await response.json()
    const repoUrl = data?.repository?.url
      ?.replace("git+", "")
      ?.replace(".git", "")

    return { wasSuccessful: !!repoUrl, url: repoUrl }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getHeaders = (changeLog: string) =>
  changeLog.match(REG_X_HEADER) ?? [""]

export const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
