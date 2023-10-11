import aboutSvg from "data-base64:~assets/about.svg"
import helpSvg from "data-base64:~assets/help.svg"
import settingsSvg from "data-base64:~assets/settings.svg"
import shareSvg from "data-base64:~assets/share.svg"
import shortArrow from "data-base64:~assets/short-arrow-right.svg"
import starSvg from "data-base64:~assets/star.svg"
import { useNavigate } from "react-router-dom"

export const DetailsOptions = () => {
  const navigate = useNavigate()

  return (
    <div className="extensions-wisher-details-options">
      <div
        onClick={() => navigate("/wisher/details-settings")}
        className="extensions-wisher-details-options__option">
        <img width={24} height={24} src={settingsSvg} alt="Settings" />

        <span>Settings</span>

        <img width={24} height={24} src={shortArrow} alt="Arrow" />
      </div>

      <div
        onClick={() => navigate("/wisher/details-help")}
        className="extensions-wisher-details-options__option">
        <img width={24} height={24} src={helpSvg} alt="Help" />

        <span>Help & Tips</span>

        <img width={24} height={24} src={shortArrow} alt="Arrow" />
      </div>

      <div
        onClick={() => navigate("/wisher/details-about")}
        className="extensions-wisher-details-options__option">
        <img width={24} height={24} src={aboutSvg} alt="About" />

        <span>About</span>

        <img width={24} height={24} src={shortArrow} alt="Arrow" />
      </div>

      <a className="extensions-wisher-details-options__option">
        <img width={24} height={24} src={starSvg} alt="Star" />

        <span>Love the app ? Give us some feedback!</span>
      </a>

      <a className="extensions-wisher-details-options__option">
        <img width={24} height={24} src={shareSvg} alt="Share" />

        <span>Tell friends about Wisher app</span>
      </a>
    </div>
  )
}
