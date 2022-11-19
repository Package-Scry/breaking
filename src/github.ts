import { request } from "@octokit/request"

export const getRelease = async (owner: string, repo: string, tag: string) => {
  try {
    // console.log("requesting", owner, repo, tag)

    const requestWithAuth = request.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })

    const result = await requestWithAuth(
      "GET /repos/{owner}/{repo}/releases/tags/{tag}",
      {
        owner,
        repo,
        tag,
      }
    )

    return result.data?.tag_name ? result.data : null
  } catch (error) {
    if (error.response.data) console.error(error.response.data)
    else {
      console.error("error with", owner, repo, tag)
      console.error(error)
    }
    return null
  }
}
