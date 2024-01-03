import { useContext } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const useClipboard = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const onClipboard = (value: string, title: string) => {
    window.navigator.clipboard.writeText(value).then(() => {
      setWisherState((wisher) => ({
        ...wisher,
        snackbar: {
          title,
          action: false
        }
      }))
    })
  }

  return { onClipboard }
}
