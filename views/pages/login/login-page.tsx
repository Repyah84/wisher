import welcomeImage from "data-base64:~assets/wisher-auth.png"

import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Header } from "~views/components/header/header"

export const LoginPage = () => {
  return (
    <div className="extensions-wisher-login-page">
      <Header></Header>

      <div className="extensions-wisher-login-page__welcome">
        <img src={welcomeImage} alt="Welcome" />

        <h1 className="extensions-wisher-login-page__title">Wisher</h1>

        <p className="extensions-wisher-login-page__description">
          Wish the best, forget the rest!
        </p>
      </div>

      <div className="extensions-wisher-login-page__login"></div>

      <div className="extensions-wisher-login-page__action">
        <ButtonNav link="/wisher">DO IT LATER</ButtonNav>
      </div>
    </div>
  )
}
