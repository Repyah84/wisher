import iconSvg from "data-base64:~assets/arrow-uot.svg"

import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const AboutPage = () => {
  return (
    <div className="extensions-wisher-about-page">
      <HeaderNav>
        <span>About</span>
      </HeaderNav>

      <div className="extensions-wisher-about-page__content">
        <a
          href="https://www.wishr.app/terms"
          target="_blanc"
          className={`__extensions-wisher-details-option__ extensions-wisher-about-page__link`}>
          <span>Terms and conditions</span>

          <img width={16} height={16} src={iconSvg} alt="outside" />
        </a>

        <a
          href="https://www.wishr.app/privacy-policy"
          target="_blanc"
          className={`__extensions-wisher-details-option__ extensions-wisher-about-page__link`}>
          <span>Privacy policy</span>

          <img width={16} height={16} src={iconSvg} alt="outside" />
        </a>

        <a
          href="https://www.wishr.app/contact-us"
          target="_blanc"
          className={`__extensions-wisher-details-option__ extensions-wisher-about-page__link`}>
          <span>Contact us</span>

          <img width={16} height={16} src={iconSvg} alt="outside" />
        </a>

        <span className="extensions-wisher-about-page__version">
          Version: 0.9.6
        </span>
      </div>
    </div>
  )
}
