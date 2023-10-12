import type { PlasmoMessaging } from "@plasmohq/messaging"

const getAuthToken: PlasmoMessaging.MessageHandler = async (_reg, res) => {
  const { token }: chrome.identity.GetAuthTokenResult =
    await chrome.identity.getAuthToken({ interactive: true })

  if (chrome.runtime.lastError || !token) {
    throw new Error(chrome.runtime.lastError.message)
  }

  res.send(token)
}

export default getAuthToken
