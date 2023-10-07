import { useRef, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { Ripple } from "../ripple/ripple"

interface Props {
  link: string
  children: ReactNode
}

export const ButtonNav = ({ link, children }: Props) => {
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
      className={`__extensions-wisher-btn__ extensions-wisher-btn-nav`}>
      {children} <Ripple host={hostRef}></Ripple>
    </button>
  )
}
