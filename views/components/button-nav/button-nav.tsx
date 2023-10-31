import { useContext, useRef, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import { Ripple } from "../ripple/ripple"

interface Props {
  link: string
  children: ReactNode
  rootLink?: string
}

export const ButtonNav = ({ link, children, rootLink }: Props) => {
  const hostRef = useRef(null)

  const location = useLocation()

  const { navigate } = useNavigateWithRedirect()

  const { setWisherState } = useContext(WisherStateContext)

  const active = location.pathname.includes(rootLink)

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
