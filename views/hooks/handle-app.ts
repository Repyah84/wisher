import { useContext, useEffect } from "react"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import type { StoreJWT } from "~gql/hooks/signin"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { useLogout } from "./logout"

export const useHandleApp = () => {
  const dispatch = useDispatch()

  const { logoutWithNavigate } = useLogout()

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
    wisherSate: { hasMessage, isShow, tabId, hasBadge },
    setWisherState
  } = useContext(WisherStateContext)

  useEffect(() => {
    if (wisherJWT === null) {
      logoutWithNavigate()
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

  return {
    isShow,
    hasMessage,
    hasBadge,
    dispatch,
    setWisherState,
    logoutWithNavigate
  }
}
