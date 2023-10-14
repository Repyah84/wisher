import shortArrow from "data-base64:~assets/short-arrow-right.svg"

import { ButtonNav } from "~views/components/button-nav/button-nav"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const SettingsPage = () => {
  return (
    <div className="extensions-wisher-settings-page">
      <HeaderNav>
        <span>Settings</span>
      </HeaderNav>

      <ButtonNav link="/wisher/details-account-settings">
        <div className="__extensions-wisher-details-option__">
          <span>Account Settings</span>

          <img width={24} height={24} src={shortArrow} alt="Arrow" />
        </div>
      </ButtonNav>
    </div>
  )
}
