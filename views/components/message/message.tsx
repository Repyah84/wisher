import { useContext, useState, type ReactNode } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

interface Props {
  children: ReactNode
  onMessageCloseStart: () => void
  noMessageClosed: () => void
}

export const MessageOverlay = ({
  children,
  onMessageCloseStart,
  noMessageClosed
}: Props) => {
  const {
    wisherSate: { hasMessage }
  } = useContext(WisherStateContext)

  const [isMessage, setIsMessage] = useState(true)

  const handleAnimation = () => {
    if (isMessage) {
      return
    }

    noMessageClosed()
    setIsMessage(true)
  }

  return hasMessage === "create-wisher" ? (
    <div className="extensions-wisher-message">
      <div
        is-overlay={isMessage.toString()}
        onClick={() => {
          setIsMessage(false)
          onMessageCloseStart()
        }}
        className="extensions-wisher-message__overlay"></div>

      <div
        onAnimationEnd={handleAnimation}
        is-message={isMessage.toString()}
        className="extensions-wisher-message__content">
        {children}
      </div>
    </div>
  ) : (
    <></>
  )
}
