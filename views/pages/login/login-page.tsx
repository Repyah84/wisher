import googleLogoSvg from "data-base64:~assets/logo-google.svg"
import welcomeImage from "data-base64:~assets/wisher-auth.png"
import { useEffect, useState } from "react"

import { useCollections } from "~gql/hooks/collections"
import { useGetItemsLazy } from "~gql/hooks/items"
import { useSignInMutate } from "~gql/hooks/signin"
import { useGetUserLazy } from "~gql/hooks/user"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { Header } from "~views/widgets/header/header"

export const LoginPage = () => {
  const { logoutUser } = useLogout()

  const { navigateWithRedirect } = useNavigateWithRedirect()

  const [isLoading, setIsLoading] = useState(false)

  const { wisherJWT, onLogin } = useSignInMutate()
  const { getUser } = useGetUserLazy()
  const { getItems } = useGetItemsLazy()
  const { getCollections } = useCollections()

  useEffect(() => {
    logoutUser()
  }, [])

  useEffect(() => {
    if (wisherJWT === null || wisherJWT === undefined) {
      return
    }

    Promise.all([getUser(), getItems(), getCollections()]).then(() => {
      setIsLoading(false)

      navigateWithRedirect("/wisher/wishes/wishes-all")
    })
  }, [wisherJWT])

  const onGoogleLoginClick = () => {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    onLogin()
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
          <Button size="md" onClickFn={onGoogleLoginClick}>
            <div className="extensions-wisher-login-page__google-login">
              <img
                width={27}
                height={27}
                src={googleLogoSvg}
                alt="google-logo"
              />

              <span>SIGN IN WITH GOOGLE</span>

              <Loader size={5.5} isLoading={isLoading} />
            </div>
          </Button>

          <ButtonNav link="/wisher/wishes/wishes-all">DO IT LATER</ButtonNav>
        </div>
      </main>
    </div>
  )
}
