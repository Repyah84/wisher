import { useContext, useMemo, useRef, type ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { resetWisher } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { ReloadSvgIcon } from "~views/components/icons/reload/reload"
import { Ripple } from "~views/components/ripple/ripple"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link: string
  children: ReactNode
  rootLink?: string
}

export const BtnReloadOrNav = ({
  link,
  children,
  rootLink,
  disabled = false
}: Props) => {
  const hostRef = useRef(null)

  const dispatch = useDispatch()

  const wisherData = useSelector(({ wisher: { data } }: RootState) => data)

  const { pathname } = useLocation()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const { setWisherState } = useContext(WisherStateContext)

  const active = pathname.includes(rootLink)

  const isReload = useMemo(() => {
    return wisherData !== null && active
  }, [pathname, wisherData])

  const onNavigate = (link: string) => {
    if (active || disabled) {
      return
    }

    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigateAndSetRedirect(link)
  }

  const onReloadClick = () => {
    dispatch(resetWisher())
  }

  return (
    <div ref={hostRef} className="extensions-wisher-btn-reload-or-nav">
      {isReload ? (
        <button
          onClick={onReloadClick}
          className={`__extensions-wisher-btn__ extensions-wisher-btn-reload-or-nav__reload`}>
          <ReloadSvgIcon />
        </button>
      ) : (
        <button
          is-disabled={disabled.toString()}
          onClick={() => onNavigate(link)}
          nav-active={active.toString()}
          className={`__extensions-wisher-btn__ extensions-wisher-btn-reload-or-nav__nav`}>
          {children}
        </button>
      )}
      <Ripple host={hostRef}></Ripple>
    </div>
  )
}
