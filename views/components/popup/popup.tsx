import { useContext, useState, type ReactNode } from "react"

import {
  WisherStateContext,
  type WisherMessage
} from "~views/context/wisher/wisher.context"

import { Button } from "../button/button"

interface Props {
  title: string
  children: ReactNode
  typeMessage: WisherMessage
}

export const Popup = ({ title, children, typeMessage }: Props) => {
  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const [isPopup, setIsPopup] = useState(true)

  const onPopupClickClose = () => {
    setIsPopup(false)
  }

  const handleAnimation = () => {
    if (isPopup) {
      return
    }

    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
    setIsPopup(true)
  }

  return typeMessage === hasMessage ? (
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
