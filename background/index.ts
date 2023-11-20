import "@plasmohq/messaging/background"

import { Storage } from "@plasmohq/storage"

chrome.action.onClicked.addListener(({ id }) => {
  const storage = new Storage({ area: "local" })

  const data = {
    tabId: id,
    messageId: Math.random()
  }

  void storage.set("action-ai", data)
})
