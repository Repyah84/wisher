import { useContext, useEffect } from "react"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import type { StoreJWT } from "~gql/hooks/signin"
import { resetWisher } from "~store/slices/wisher"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { useAsyncStoreDataWithContext } from "./async-store-data"
import { useLogout } from "./logout"

export const useHandleApp = () => {
  const dispatch = useDispatch()

  const logout = useLogout()

  const [wisherJWT] = useStorage<StoreJWT | null | boolean>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    true
  )

  const [extensionAction, setExtensionAction] = useStorage<{
    tabId: string
    messageId: number
  } | null>(
    {
      key: "action-ai",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const {
    wisherSate: { hasMessage, isShow, tabId },
    setWisherState
  } = useContext(WisherStateContext)

  useEffect(() => {
    if (isShow) {
      dispatch(resetWisher())
    }
  }, [isShow])

  useEffect(() => {
    if (wisherJWT === null) {
      logout()
    }
  }, [wisherJWT])

  useEffect(() => {
    if (extensionAction === null || extensionAction.tabId !== tabId) {
      return
    }

    setWisherState((wisher) => ({
      ...wisher,
      isShow: !wisher.isShow,
      hasMessage: null
    }))

    setExtensionAction(null)
  }, [extensionAction])

  return { isShow, hasMessage, dispatch, setWisherState, logout }
}
