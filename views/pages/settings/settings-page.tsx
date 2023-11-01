import shortArrow from "data-base64:~assets/short-arrow-right.svg"
import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const SettingsPage = () => {
  const user = useSelector(({ user: { data } }: RootState) => data)

  return (
    <div className="extensions-wisher-settings-page">
      <HeaderNav>
        <span>Settings</span>
      </HeaderNav>

      <div className="extensions-wisher-settings-page__content">
        <ButtonNav disabled={user === null} link="/personal-info">
          <div className="__extensions-wisher-details-option__">
            <span>Personal information</span>

            <img width={24} height={24} src={shortArrow} alt="Arrow" />
          </div>
        </ButtonNav>

        <ButtonNav
          disabled={user === null}
          link="/wisher/details-account-settings">
          <div className="__extensions-wisher-details-option__">
            <span>Account Settings</span>

            <img width={24} height={24} src={shortArrow} alt="Arrow" />
          </div>
        </ButtonNav>

        <span className="extensions-wisher-settings-page__languages">
          Language: English
        </span>
      </div>
    </div>
  )
}
