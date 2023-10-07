import svgIcon from "data-base64:~assets/wisher-avatar.svg"
import { useNavigate } from "react-router-dom"

import { Button } from "~views/components/button/button"
import { WarningSvgIcon } from "~views/components/icons/warning/warning"

export const UserPanel = () => {
  const navigate = useNavigate()

  const onNavClick = () => {
    navigate("/login")
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
        <Button btnType="stroke" onClickFn={onNavClick}>
          <span>SING UP</span>
        </Button>
      </div>
    </div>
  )
}
