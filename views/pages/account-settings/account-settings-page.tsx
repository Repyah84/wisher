import svgPawerIcon from "data-base64:~assets/power.svg"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import { auth } from "~firebase"
import { logout } from "~store/actions/logout"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const AccountSettingsPage = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onLogoutClick = () => {
    auth.signOut().then(() => {
      const storage = new Storage({ area: "local" })

      storage.set("JWT", null).then(() => {
        dispatch(logout())

        navigate("/login")
      })
    })
  }

  return (
    <div className="extensions-wisher-account-settings-page">
      <HeaderNav>
        <span>Settings</span>
      </HeaderNav>

      <div className="extensions-wisher-account-settings-page__action">
        <button
          onClick={onLogoutClick}
          className="__extensions-wisher-details-option__">
          <img width={24} height={24} src={svgPawerIcon} alt="Pawer" />

          <span>Log out</span>
        </button>
      </div>
    </div>
  )
}
