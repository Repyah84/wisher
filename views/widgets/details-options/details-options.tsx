import aboutSvg from "data-base64:~assets/about.svg"
import appleStore from "data-base64:~assets/apple-badge.png"
import googleStore from "data-base64:~assets/google-badge.png"
import helpSvg from "data-base64:~assets/help.svg"
import settingsSvg from "data-base64:~assets/settings.svg"
import shortArrow from "data-base64:~assets/short-arrow-right.svg"
import starSvg from "data-base64:~assets/star.svg"

import { ButtonNav } from "~views/components/button-nav/button-nav"
import { ShareSvgIcon } from "~views/components/icons/share/share"

export const DetailsOptions = () => {
  return (
    <div className="extensions-wisher-details-options">
      <ButtonNav link="/wisher/details-settings">
        <div className="__extensions-wisher-details-option__">
          <img width={24} height={24} src={settingsSvg} alt="Settings" />

          <span>Settings</span>

          <img width={24} height={24} src={shortArrow} alt="Arrow" />
        </div>
      </ButtonNav>

      <ButtonNav link="/wisher/details-help">
        <div className="__extensions-wisher-details-option__">
          <img width={24} height={24} src={helpSvg} alt="Help" />

          <span>Help & Tips</span>

          <img width={24} height={24} src={shortArrow} alt="Arrow" />
        </div>
      </ButtonNav>

      <ButtonNav link="/wisher/details-about">
        <div className="__extensions-wisher-details-option__">
          <img width={24} height={24} src={aboutSvg} alt="About" />

          <span>About</span>

          <img width={24} height={24} src={shortArrow} alt="Arrow" />
        </div>
      </ButtonNav>

      <a className="__extensions-wisher-details-option__">
        <img width={24} height={24} src={starSvg} alt="Star" />

        <span>Love the app ? Give us some feedback!</span>
      </a>

      <a className="__extensions-wisher-details-option__">
        <ShareSvgIcon />

        <span>Tell friends about Wisher app</span>
      </a>

      <div className="extensions-wisher-details-options__store-links">
        <a
          className="extensions-wisher-details-options__store-link"
          href="https://play.google.com/store/apps/details?id=com.wisherandgiftapp"
          target="_blank">
          <img width={188} height={56} src={googleStore} alt="Google store" />
        </a>

        <a
          className="extensions-wisher-details-options__store-link"
          href="https://apps.apple.com/us/app/ai-registry-wishlist-wisher/id1624451253"
          target="_blank">
          <img width={188} height={56} src={appleStore} alt="Apple store" />
        </a>
      </div>
    </div>
  )
}
