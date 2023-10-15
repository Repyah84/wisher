import svgPawerIcon from "data-base64:~assets/power.svg"
import { useNavigate } from "react-router-dom"

import { useFirebaseAuth } from "~hooks/firebase-auth"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const AccountSettingsPage = () => {
  const navigate = useNavigate()
  const { isLoading, onLogout } = useFirebaseAuth()

  const onLogOutClick = async () => {
    await onLogout()

    navigate("/login")
  }

  return (
    <div className="extensions-wisher-account-settings-page">
      <HeaderNav>
        <span>Account Settings</span>
      </HeaderNav>

      <div className="extensions-wisher-account-settings-page__action">
        <div
          onClick={onLogOutClick}
          className="__extensions-wisher-details-option__">
          <img width={24} height={24} src={svgPawerIcon} alt="Pawer" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  )
}
