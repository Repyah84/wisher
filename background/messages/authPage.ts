import type { PlasmoMessaging } from "@plasmohq/messaging"

const authPage: PlasmoMessaging.MessageHandler = async (_reg, res) => {
  const widow = await chrome.windows.create({
    url: "https://repyah84.github.io/auth-wisger/",
    focused: true,
    type: "popup",
    width: 400,
    height: 500
  })

  res.send(widow)
}

export default authPage
