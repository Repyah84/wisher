import "@plasmohq/messaging/background"

import { startHub } from "@plasmohq/messaging/pub-sub"
import { Storage } from "@plasmohq/storage"

const storage = new Storage({ area: "local" })

chrome.action.onClicked.addListener(({ id }) => {
  const data = {
    tabId: id,
    messageId: Math.random()
  }

  void storage.set("action-ai", data)
})

startHub()
