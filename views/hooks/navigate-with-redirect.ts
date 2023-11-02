import { useLocation, useNavigate } from "react-router-dom"

export const useNavigateWithRedirect = () => {
  const navigate = useNavigate()

  const { pathname, search } = useLocation()

  const navigateAndSetRedirect = (link: string, hash?: string) => {
    const searchParams = new URLSearchParams(search)

    searchParams.set("redirect", `${pathname}${search}`)

    navigate(`${link}?${searchParams}#${hash}`)
  }

  const navigateWithRedirect = (link: string) => {
    const searchParams = new URLSearchParams(search)

    const redirectLink = searchParams.get("redirect")

    const linkWithRedirect = redirectLink || link

    navigate(linkWithRedirect)
  }

  return { navigate, navigateAndSetRedirect, navigateWithRedirect }
}
