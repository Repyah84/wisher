import svgIcon from "data-base64:~assets/poll.svg"
import { useState, type ReactNode } from "react"

import { Button } from "../button/button"
import { CrossCircleSvgIcon } from "../icons/cross-circle/cross-circle"

interface Props {
  hasBtnClose?: boolean
  children: ReactNode
  hasMessage?: boolean
  onMessageClose?: () => void
}

export const Help = ({
  hasMessage = true,
  hasBtnClose = false,
  children,
  onMessageClose = () => undefined
}: Props) => {
  const [isMessage, setIsMessage] = useState(true)

  const onBntClick = () => {
    setIsMessage(false)
  }

  return hasMessage ? (
    <div
      onAnimationEnd={onMessageClose}
      is-btn-close={hasBtnClose.toString()}
      is-message={isMessage.toString()}
      className="extensions-wisher-help">
      {hasBtnClose ? (
        <div className="extensions-wisher-help__btn-close">
          <Button btnType="icon" onClickFn={onBntClick}>
            <CrossCircleSvgIcon />
          </Button>
        </div>
      ) : (
        <></>
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
  ) : (
    <></>
  )
}
