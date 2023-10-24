import { useLocation, useNavigate } from "react-router-dom"

import { Button, type BtnColor } from "~views/components/button/button"

export const WishesNav = () => {
  const navigate = useNavigate()

  const location = useLocation()

  const onNavClick = (link: string) => {
    navigate(link)
  }

  const activeLink = (link: string): BtnColor => {
    console.log("ÉEEEEEEEEEEEEEEEEEEE")

    return location.pathname.includes(link) ? "primary" : "default"
  }

  return (
    <div className="extensions-wisher-wishes-nav">
      <Button
        btnColor={activeLink("all-wishes")}
        onClickFn={() => {
          onNavClick("/wisher/wishes/all-wishes")
        }}>
        <span>All Wishes</span>
      </Button>

      <Button
        btnColor={activeLink("wishes-collections")}
        onClickFn={() => {
          onNavClick("/wisher/wishes/wishes-collections")
        }}>
        <span>Collection</span>
      </Button>
    </div>
  )
}
