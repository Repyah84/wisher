import svgProfile from "data-base64:~assets/profile.svg"
import svgIcon from "data-base64:~assets/wisher-avatar.svg"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { WarningSvgIcon } from "~views/components/icons/warning/warning"

export const UserPanel = () => {
  const navigate = useNavigate()

  const user = useSelector(({ user: { data } }: RootState) => data)

  console.log("!!!!!!!!!!!!!!!", user)

  return (
    <div className="extensions-wisher-user-panel">
      <div className="extensions-wisher-user-panel__user">
        <img
          className="extensions-wisher-user-panel__user-image"
          src={user?.imageUrl ? user.imageUrl : svgIcon}
          alt="auth"
          width={72}
          height={72}
        />

        <div className="extensions-wisher-user-panel__user-info">
          <span className="extensions-wisher-user-panel__user-name">
            {user?.firstName ? user.firstName : "Guest555550115"}
          </span>

          {user?.email ? (
            <span className="extensions-wisher-user-panel__user-email">
              {user.email}
            </span>
          ) : (
            <span className="extensions-wisher-user-panel__auth-message">
              <WarningSvgIcon />
              <span>Please sing in</span>
            </span>
          )}
        </div>
      </div>

      <div className="extensions-wisher-user-panel__action">
        <Button
          btnType="stroke"
          btnColor="primary"
          onClickFn={() =>
            navigate(
              user === null ? "/login" : "/wisher/details-account-settings"
            )
          }>
          {user === null ? (
            <span>SING UP</span>
          ) : (
            <img width={24} height={24} src={svgProfile} alt="Profile" />
          )}
        </Button>
      </div>
    </div>
  )
}
