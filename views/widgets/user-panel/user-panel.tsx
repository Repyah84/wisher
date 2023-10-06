import svgIcon from "data-base64:~assets/wisher-avatar.svg"

import { ButtonNav } from "~views/components/button-nav/button-nav"
import { WarningSvgIcon } from "~views/components/icons/warning/warning"

export const UserPAnel = () => {
  return (
    <div className="extensions-wisher-user-panel">
      <div className="extensions-wisher-user-panel__user">
        <img src={svgIcon} alt="auth" width={72} height={72} />

        <div className="extensions-wisher-user-panel__user-name">
          <span>Guest555550115</span>

          <div className="extensions-wisher-user-panel__auth-message">
            <WarningSvgIcon />
            <span>Please sing in</span>
          </div>
        </div>
      </div>

      <div className="extensions-wisher-user-panel__action">
        <ButtonNav link="/login" bnyNavColor="primary">
          <span>SING UP</span>
        </ButtonNav>
      </div>
    </div>
  )
}
