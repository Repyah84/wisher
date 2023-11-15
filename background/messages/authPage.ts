import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

const authPage: PlasmoMessaging.MessageHandler = async () => {
  const widow = await chrome.windows.create({
    url: "https://repyah84.github.io/weather/",
    focused: true,
    type: "popup",
    width: 400,
    height: 500
  })

  const tabId = widow.tabs[0].id

  chrome.tabs.onUpdated.addListener(async (id, changeInfo, tab) => {
    if (id === tabId && changeInfo.status == "complete") {
      console.log("TAB_UPDATE", tab)
      const storage = new Storage({ area: "local" })

      const params = new URLSearchParams(tab.url.split("?")[1])

      const token = params.get("token")

      if (token) {
        console.log("TOKEN", token)

        await storage.set("GOOGLE_AUTH_TOKEN", token)
      }
    }
  })
}

export default authPage
