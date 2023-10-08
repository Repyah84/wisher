import { useState, type ReactNode } from "react"

import { Button } from "../button/button"

interface Props {
  title: string
  children: ReactNode
  hasPopup: boolean
  hidePopupFn: () => void
}

export const Popup = ({ title, children, hasPopup, hidePopupFn }: Props) => {
  const [isPopup, setIsPopup] = useState(true)

  const onPopupClickClose = () => {
    setIsPopup(false)
  }

  const handleAnimation = () => {
    if (isPopup) {
      return
    }

    hidePopupFn()
    setIsPopup(true)
  }

  return hasPopup ? (
    <div className="extensions-wisher-popup">
      <div
        is-overlay={isPopup.toString()}
        onClick={onPopupClickClose}
        className="extensions-wisher-popup__overlay"></div>

      <div
        onAnimationEnd={handleAnimation}
        is-layout={isPopup.toString()}
        className="extensions-wisher-popup__layout">
        <div className="extensions-wisher-popup__header">
          <span>{title}</span>

          <Button btnType="stroke" onClickFn={onPopupClickClose}>
            <span>Close</span>
          </Button>
        </div>

        {children}
      </div>
    </div>
  ) : (
    <></>
  )
}
