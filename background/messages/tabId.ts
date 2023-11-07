import type { PlasmoMessaging } from "@plasmohq/messaging"

const getTabId: PlasmoMessaging.MessageHandler = async (reg, res) => {
  const tabId = reg?.sender?.tab?.id

  if (chrome.runtime.lastError || !tabId) {
    throw new Error(chrome.runtime.lastError.message)
  }

  res.send(tabId)
}

export default getTabId
