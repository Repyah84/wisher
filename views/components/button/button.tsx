import { useRef, type ReactNode } from "react"

import { Ripple } from "../ripple/ripple"

interface Props {
  btnType?: "icon" | "default" | "stroke"
  btnColor?: "primary" | "default"
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
