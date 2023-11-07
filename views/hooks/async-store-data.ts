import { useContext } from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const useAsyncStoreDataWithContext = () => {
  const { wisherSate, setWisherState } = useContext(WisherStateContext)

  const initDataByBackground = async () => {
    const tabId = await sendToBackground<any, string>({
      name: "tabId"
    })

    setWisherState((wisher) => ({ ...wisher, tabId }))
  }

  const initialDataByStore = async () => {
    const storage = new Storage()

    const [isCreateCollectionHelpStore, isDetailsHelpStore] = await Promise.all(
      [
        storage.get<boolean | undefined>("isCreateCollectionHelp"),
        storage.get<boolean | undefined>("isDetailsHelp")
      ]
    )

    const isCreateCollectionHelp = isCreateCollectionHelpStore ?? true

    const isDetailsHelp = isDetailsHelpStore ?? true

    setWisherState((wisher) => ({
      ...wisher,
      isCreateCollectionHelp,
      isDetailsHelp
    }))
  }

  const setStoreDataDetailsHelp = (value: boolean) => {
    const storage = new Storage({ area: "local" })

    storage.set("isDetailsHelp", value).then(() => {
      setWisherState((wisher) => ({ ...wisher, isDetailsHelp: value }))
    })
  }

  const setStoreDataIsCreateCollectionHelp = (value: boolean) => {
    const storage = new Storage({ area: "local" })

    storage.set("isCreateCollectionHelp", value).then(() => {
      setWisherState((wisher) => ({ ...wisher, isCreateCollectionHelp: value }))
    })
  }

  return {
    wisherSate,
    setWisherState,
    initialDataByStore,
    initDataByBackground,
    setStoreDataDetailsHelp,
    setStoreDataIsCreateCollectionHelp
  }
}
