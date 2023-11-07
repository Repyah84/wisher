import "@plasmohq/messaging/background"

import { match } from "assert"

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

storage.watch({
  "action-ai": (c) => {
    console.log(c.newValue)
  }
})

startHub()
