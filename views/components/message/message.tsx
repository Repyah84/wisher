import { type ReactNode } from "react"

import { useMountToggle } from "~hooks/mount-toggle"

interface Props {
  children: ReactNode
  hasMessage: boolean
  onMessageCloseClick: () => void
}

export const MessageOverlay = ({
  children,
  hasMessage,
  onMessageCloseClick
}: Props) => {
  const { state, animationEnd } = useMountToggle(hasMessage)

  return state ? (
    <div className="extensions-wisher-message">
      <div
        is-overlay={hasMessage.toString()}
        onClick={onMessageCloseClick}
        className="extensions-wisher-message__overlay"></div>

      <div
        onAnimationEnd={animationEnd}
        is-message={hasMessage.toString()}
        className="extensions-wisher-message__content">
        {children}
      </div>
    </div>
  ) : (
    <></>
  )
}
