import { useRef, type ReactNode } from "react"

import { Ripple } from "../ripple/ripple"

interface Props {
  btnType?: "icon" | "default"
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
      className={`extensions-wisher-button extensions-wisher-button--${btnType} extensions-wisher-button-color--${btnColor}`}
      disabled={disable}
      onClick={onClickFn}>
      {children}
      <Ripple host={hostRef}></Ripple>
    </button>
  )
}
