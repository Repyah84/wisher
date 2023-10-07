import svgIcon from "data-base64:~assets/wisher-avatar.svg"
import { useLocation, useNavigate } from "react-router-dom"

import { Button, type BtnColor } from "~views/components/button/button"
import { WarningSvgIcon } from "~views/components/icons/warning/warning"

export const UserPanel = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onNavClick = (link: string) => {
    navigate(link)
  }

  const activeLink = (link: string): BtnColor => {
    return location.pathname.includes(link) ? "primary" : "default"
  }

  return (
    <div className="extensions-wisher-user-panel">
      <div className="extensions-wisher-user-panel__user">
        <img src={svgIcon} alt="auth" width={72} height={72} />

        <div className="extensions-wisher-user-panel__user-info">
          <span className="extensions-wisher-user-panel__user-name">
            Guest555550115
          </span>

          <div className="extensions-wisher-user-panel__auth-message">
            <WarningSvgIcon />
            <span>Please sing in</span>
          </div>
        </div>
      </div>

      <div className="extensions-wisher-user-panel__action">
        <Button btnType="stroke" onClickFn={() => onNavClick("/login")}>
          <span>SING UP</span>
        </Button>
      </div>

      <div className="extensions-wisher-user-panel__nav">
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
    </div>
  )
}
