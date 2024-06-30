import jwt_decode from "jwt-decode"

import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

export interface StoreJWT {
  token: string
  exp: number
}

let authWindowId: null | number = null
let authTabId: null | number = null

const tabUpdateListener = async (
  id: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) => {
  if (tab.url && id === authTabId && changeInfo.status == "complete") {
    const url = new URL(tab.url)

    const token = url.searchParams.get("token")

    if (token) {
      const storage = new Storage({ area: "local" })

      const decoder = jwt_decode(token)

      if (typeof decoder === "object" && "exp" in decoder) {
        await storage.set("JWT", { exp: decoder.exp as number, token })

        await chrome.windows.remove(authWindowId)

        chrome.tabs.onUpdated.removeListener(tabUpdateListener)
      }
    }
  }
}

const auth: PlasmoMessaging.MessageHandler = async () => {
  if (authWindowId !== null) {
    try {
      await chrome.windows.get(authWindowId)

      await chrome.windows.remove(authWindowId)

      chrome.tabs.onUpdated.removeListener(tabUpdateListener)
    } catch {
      authWindowId = null
    }
  }

  const widow = await chrome.windows.create({
    url: process.env.PLASMO_PUBLIC_AUTH_APP,
    focused: true,
    type: "popup",
    top: 100,
    width: 428,
    height: 700
  })

  authWindowId = widow.id
  authTabId = widow.tabs[0].id

  chrome.tabs.onUpdated.addListener(tabUpdateListener)
}

export default auth
