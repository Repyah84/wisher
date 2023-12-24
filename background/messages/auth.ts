import jwt_decode from "jwt-decode"

import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

export interface StoreJWT {
  token: string
  exp: number
}

const auth: PlasmoMessaging.MessageHandler = async () => {
  const widow = await chrome.windows.create({
    url: "https://auth.wishr.app",
    focused: true,
    type: "popup",
    top: 100,
    width: 428,
    height: 650
  })

  const tabId = widow.tabs[0].id

  chrome.tabs.onUpdated.addListener(async (id, changeInfo, tab) => {
    if (tab.url && id === tabId && changeInfo.status == "complete") {
      const url = new URL(tab.url)

      const token = url.searchParams.get("token")

      if (token) {
        const storage = new Storage({ area: "local" })

        const decoder = jwt_decode(token)

        if (typeof decoder === "object" && "exp" in decoder) {
          await storage.set("JWT", { exp: decoder.exp as number, token })

          await chrome.windows.remove(widow.id)
        }
      }
    }
  })
}

export default auth
