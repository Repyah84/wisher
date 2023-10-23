import aboutSvg from "data-base64:~assets/about.svg"
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
    </div>
  )
}
