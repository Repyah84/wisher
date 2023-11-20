import svgPawerIcon from "data-base64:~assets/power.svg"
import userDeleteIcon from "data-base64:~assets/user-delete.svg"
import { useContext } from "react"

import { Button } from "~views/components/button/button"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useLogout } from "~views/hooks/logout"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const AccountSettingsPage = () => {
  const { logoutWithNavigate } = useLogout()

  const { setWisherState } = useContext(WisherStateContext)

  const onDeleteUser = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "delete-user" }))
  }

  return (
    <div className="extensions-wisher-account-settings-page">
      <HeaderNav>
        <span>Settings</span>
      </HeaderNav>

      <div className="extensions-wisher-account-settings-page__action">
        <Button btnType="stroke" onClickFn={onDeleteUser}>
          <img width={24} height={24} src={userDeleteIcon} alt="Delete user" />

          <span>Delete my account</span>
        </Button>

        <Button btnType="stroke" onClickFn={logoutWithNavigate}>
          <img width={24} height={24} src={svgPawerIcon} alt="Pawer" />

          <span>Log out</span>
        </Button>
      </div>
    </div>
  )
}
