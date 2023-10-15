import { type ReactNode } from "react"

import { useMount } from "~hooks/mount"

import { Button } from "../button/button"

interface Props {
  title: string
  children: ReactNode
  hasPopup: boolean
  onCloseClick: () => void
}

export const Popup = ({ title, children, hasPopup, onCloseClick }: Props) => {
  const { state, animationEnd } = useMount(hasPopup)

  return state ? (
    <div className="extensions-wisher-popup">
      <div
        is-overlay={hasPopup.toString()}
        onAnimationEnd={animationEnd}
        onClick={onCloseClick}
        className="extensions-wisher-popup__overlay"></div>

      <div
        is-layout={hasPopup.toString()}
        className="extensions-wisher-popup__layout">
        <div className="extensions-wisher-popup__header">
          <span>{title}</span>

          <Button btnType="stroke" onClickFn={onCloseClick}>
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
