import { useLocation, useNavigate } from "react-router-dom"

import { Button, type BtnColor } from "~views/components/button/button"

export const WishesNav = () => {
  const navigate = useNavigate()

  const location = useLocation()

  const onNavClick = (link: string) => {
    navigate(link)
  }

  const activeLink = (link: string): BtnColor => {
    return location.pathname.includes(link) ? "primary" : "exchange"
  }

  return (
    <div className="extensions-wisher-wishes-nav">
      <Button
        btnColor={activeLink("wishes-all")}
        onClickFn={() => {
          onNavClick("/wisher/wishes/wishes-all")
        }}>
        <span>All wishes</span>
      </Button>

      <Button
        btnColor={activeLink("wishes-collections")}
        onClickFn={() => {
          onNavClick("/wisher/wishes/wishes-collections")
        }}>
        <span>Collections</span>
      </Button>
    </div>
  )
}
