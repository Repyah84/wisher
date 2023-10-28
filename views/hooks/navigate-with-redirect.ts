import { useLocation, useNavigate } from "react-router-dom"

export const useNavigateWithRedirect = () => {
  const nav = useNavigate()

  const { pathname, search } = useLocation()

  const navigate = (link: string) => {
    const searchParams = new URLSearchParams(search)

    searchParams.set("redirect", pathname)

    nav(`${link}?${searchParams}`)
  }

  const navigateWithRedirect = (link: string) => {
    const searchParams = new URLSearchParams(search)

    const redirectLink = searchParams.get("redirect")

    const linkWithRedirect = redirectLink || link

    nav(linkWithRedirect)
  }

  return { navigate, navigateWithRedirect }
}