import "@plasmohq/messaging/background"

import { Storage } from "@plasmohq/storage"

import { WISHER_REDIRECT } from "~const/wisher-redirect"

chrome.runtime.onInstalled.addListener(async () => {
  if (process.env.NODE_ENV === "production") {
    const tabs = await chrome.tabs.query({ status: "complete" })

    tabs.forEach((tab) => {
      chrome.tabs.reload(tab.id)
    })
  }
})

chrome.action.onClicked.addListener(async ({ id }) => {
  const activeTab = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })

  //TODO change "chrome://newtab/" for multi browser
  if (activeTab[0].url === "chrome://newtab/") {
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
