import { useRef, type ReactNode } from "react"

import { Ripple } from "../ripple/ripple"

type BtnType = "icon" | "default" | "stroke"
type BtnColor = "primary" | "default"
type BtnSize = "sm" | "md"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: BtnType
  btnColor?: BtnColor
  children: ReactNode
  onClickFn: () => void
  disable?: boolean
  size?: BtnSize
}

export const Button = ({
  btnType = "default",
  btnColor = "default",
  disable = false,
  children,
  onClickFn,
  type = "button",
  size = "sm"
}: Props) => {
  const hostRef = useRef(null)

  return (
    <button
      type={type}
      ref={hostRef}
      className={`__extensions-wisher-btn__ extensions-wisher-btn extensions-wisher-btn--${btnType} extensions-wisher-btn-color--${btnColor} extensions-wisher-btn-size--${size}`}
      disabled={disable}
      is-disabled={disable.toString()}
      onClick={onClickFn}>
      {children}
      <Ripple host={hostRef}></Ripple>
    </button>
  )
}
