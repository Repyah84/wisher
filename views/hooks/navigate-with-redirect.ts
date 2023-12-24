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

  const navigateAndSaveRedirect = (link: string) => {
    const searchParams = new URLSearchParams(search)

    const redirectParam = searchParams.get("redirect")

    const href =
      redirectParam === null ? link : `${link}?redirect=${redirectParam}`

    navigate(href)
  }

  return {
    navigate,
    navigateAndSetRedirect,
    navigateWithRedirect,
    navigateAndSaveRedirect
  }
}
