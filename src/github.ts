import { createAppAuth } from "@octokit/auth-app"
import { request } from "@octokit/request"

export const getRelease = async (owner: string, repo: string, tag: string) => {
  try {
    console.log("requesting", owner, repo, tag)

    const auth = createAppAuth({
      appId: process.env.APP_ID,
      privateKey: process.env.PRIVATE_KEY,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    })

    // Retrieve JSON Web Token (JWT) to authenticate as app
    const { token } = await auth({ type: "app" })

    const result = await request(
      "GET /repos/{owner}/{repo}/releases/tags/{tag}",
      {
        headers: {
          authorization: token,
        },
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
