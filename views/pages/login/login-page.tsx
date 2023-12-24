import welcomeImage from "data-base64:~assets/wisher-auth.png"
import { useEffect } from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import type { StoreJWT } from "~background/messages/auth"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Button } from "~views/components/button/button"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { Header } from "~views/widgets/header/header"

export const LoginPage = () => {
  const { logoutUser } = useLogout()

  const [wisherJWT] = useStorage<StoreJWT | null>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const { navigateAndSaveRedirect } = useNavigateWithRedirect()

  useEffect(() => {
    logoutUser()
  }, [])

  useEffect(() => {
    if (wisherJWT === null || wisherJWT === undefined) {
      return
    }

    navigateAndSaveRedirect("/initial")
  }, [wisherJWT])

  const onLoginClick = () => {
    void sendToBackground({
      name: "auth"
    })
  }

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
          <Button btnColor="primary" size="md" onClickFn={onLoginClick}>
            <span>LOGIN IN</span>
          </Button>

          <ButtonNav link="/wisher/wishes/wishes-all">DO IT LATER</ButtonNav>
        </div>
      </main>
    </div>
  )
}
