import { useRef, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { Ripple } from "../ripple/ripple"

interface Props {
  link: string
  children: ReactNode
  bnyNavColor?: "default" | "primary"
}

export const ButtonNav = ({
  link,
  children,
  bnyNavColor = "default"
}: Props) => {
  const hostRef = useRef(null)

  const location = useLocation()

  // console.log(location, "!!!!!!!!!!!!!!!!!", link)

  const navigate = useNavigate()

  const active = (location.pathname === link).toString()

  return (
    <button
      ref={hostRef}
      onClick={() => navigate(link)}
      nav-active={active}
      className={`__extensions-wisher-btn__ extensions-wisher-btn-nav extensions-wisher-btn-nav--${bnyNavColor}`}>
      {children} <Ripple host={hostRef}></Ripple>
    </button>
  )
}