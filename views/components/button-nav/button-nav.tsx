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
  const navigate = useNavigate()

  const active = location.pathname.includes(link)

  const onNavigate = (link: string) => {
    if (active) {
      return
    }

    navigate(link)
  }

  return (
    <button
      ref={hostRef}
      onClick={() => onNavigate(link)}
      nav-active={active.toString()}
      className={`__extensions-wisher-btn__ extensions-wisher-btn-nav`}>
      {children} <Ripple host={hostRef}></Ripple>
    </button>
  )
}
