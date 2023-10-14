import googleLogoSvg from "data-base64:~assets/logo-google.svg"
import welcomeImage from "data-base64:~assets/wisher-auth.png"

import { useFirebase } from "~firebase/hook"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Button } from "~views/components/button/button"
import { Header } from "~views/widgets/header/header"

export const LoginPage = () => {
  const { onLogin, onLogout } = useFirebase()

  return (
    <div className="extensions-wisher-login-page">
      <Header></Header>

      <main className="extensions-wisher-login-page__main">
        <img width={290} height={232} src={welcomeImage} alt="Welcome" />

        <div className="extensions-wisher-login-page__welcome">
          <h1 className="extensions-wisher-login-page__title">Wisher</h1>

          <p className="extensions-wisher-login-page__description">
            Wish the best, forget the rest!
          </p>
        </div>

        <p className="extensions-wisher-login-page__description extensions-wisher-login-page__description--grey">
          Sign up to keep your wishes safe
        </p>

        <div className="extensions-wisher-login-page__action">
          <Button size="md" onClickFn={onLogin}>
            <div className="extensions-wisher-login-page__google-login">
              <img
                width={27}
                height={27}
                src={googleLogoSvg}
                alt="google-logo"
              />

              <span>SIGN UP WITH GOOGLE</span>
            </div>
          </Button>

          <ButtonNav link="/wisher">DO IT LATER</ButtonNav>
        </div>
      </main>
    </div>
  )
}
