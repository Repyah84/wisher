import googleLogoSvg from "data-base64:~assets/logo-google.svg"
import welcomeImage from "data-base64:~assets/wisher-auth.png"
import { useEffect } from "react"

import { useFirebase } from "~firebase/hook"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Button } from "~views/components/button/button"
import { Header } from "~views/widgets/header/header"

export const LoginPage = () => {
  const { user, isLoading, onLogin, onLogout } = useFirebase()

  useEffect(() => {
    console.log("@@@@@@@@@@@", user)
  }, [user])

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

              <span style={{ marginLeft: "-27px" }}>SIGN UP WITH GOOGLE</span>
            </div>
          </Button>

          <ButtonNav link="/wisher">DO IT LATER</ButtonNav>
        </div>
      </main>
    </div>
  )
}
