import "@plasmohq/messaging/background"

import { Storage } from "@plasmohq/storage"

import { WISHER_REDIRECT } from "~const/wisher-redirect"

const ignore = [
  "chrome://extensions",
  "https://app.netlify.com/",
  "edge://extensions/",
  `${process.env.PLASMO_PUBLIC_AUTH_APP}`,
  "https://accounts.google.com",
  "https://iwish-c82a4.firebaseapp.com",
  "https://appleid.apple.com/auth"
]

chrome.runtime.onInstalled.addListener(async () => {
  if (process.env.NODE_ENV === "production") {
    const tabs = await chrome.tabs.query({ status: "complete" })

    tabs.forEach((tab) => {
      const url = tab.url

      if (url && !ignore.some((item) => url.includes(item))) {
        chrome.tabs.reload(tab.id)
      }
    })
  }
})

chrome.action.onClicked.addListener(async ({ id }) => {
  const activeTab = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })

  if (
    activeTab[0].url === "chrome://newtab/" ||
    activeTab[0].url === "edge://newtab/"
  ) {
    await chrome.tabs.create({
      url: WISHER_REDIRECT
    })

    return
  }

  const storage = new Storage({ area: "local" })

  const data = {
    tabId: id,
    messageId: Math.random()
  }

  void storage.set("action-ai", data)
})
