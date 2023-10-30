import svgIcon from "data-base64:~assets/poll.svg"
import { useState, type ReactNode } from "react"

import { Button } from "../button/button"
import { CrossCircleSvgIcon } from "../icons/cross-circle/cross-circle"

interface Props {
  children: ReactNode
  hasMessage?: boolean
  hasBtnClose?: boolean
  onMessageClosed?: () => void
}

export const Help = ({
  hasMessage = true,
  hasBtnClose = false,
  children,
  onMessageClosed = () => undefined
}: Props) => {
  const [isMessage, setIsMessage] = useState(true)

  const onBntClick = () => {
    setIsMessage(false)
  }

  return (
    hasMessage && (
      <div
        is-message={isMessage.toString()}
        onAnimationEnd={onMessageClosed}
        className="extensions-wisher-help">
        <div
          is-btn-close={hasBtnClose.toString()}
          is-message={isMessage.toString()}
          className="extensions-wisher-help__content">
          {hasBtnClose && (
            <div className="extensions-wisher-help__btn-close">
              <Button btnType="icon" onClickFn={onBntClick}>
                <CrossCircleSvgIcon />
              </Button>
            </div>
          )}

          <img
            className="extensions-wisher-help__icon"
            width={24}
            height={24}
            src={svgIcon}
            alt="Poll"
          />

          {children}
        </div>
      </div>
    )
  )
}
