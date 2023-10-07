import { useRef, type ReactNode } from "react"

import { Ripple } from "../ripple/ripple"

export type BtnType = "icon" | "default" | "stroke"
export type BtnColor = "primary" | "default"
interface Props {
  btnType?: BtnType
  btnColor?: BtnColor
  children: ReactNode
  onClickFn: () => void
  disable?: boolean
}

export const Button = ({
  btnType = "default",
  btnColor = "default",
  disable = false,
  children,
  onClickFn
}: Props) => {
  const hostRef = useRef(null)

  return (
    <button
      ref={hostRef}
      className={`__extensions-wisher-btn__ extensions-wisher-btn--${btnType} extensions-wisher-btn-color--${btnColor}`}
      disabled={disable}
      onClick={onClickFn}>
      {children}
      <Ripple host={hostRef}></Ripple>
    </button>
  )
}
