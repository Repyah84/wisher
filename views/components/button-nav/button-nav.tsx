import { useContext, useRef, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { Ripple } from "../ripple/ripple"

interface Props {
  link: string
  children: ReactNode
}

export const ButtonNav = ({ link, children }: Props) => {
  const hostRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const { setWisherState } = useContext(WisherStateContext)

  const active = location.pathname.includes(link)

  const onNavigate = (link: string) => {
    if (active) {
      return
    }

    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigate(link)
  }

  return (
    <button
      ref={hostRef}
      onClick={() => onNavigate(link)}
      nav-active={active.toString()}
      className={`__extensions-wisher-btn__ extensions-wisher-btn-nav`}>
      {children}
      <Ripple host={hostRef}></Ripple>
    </button>
  )
}
