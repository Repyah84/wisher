import googleLogoSvg from "data-base64:~assets/logo-google.svg"
import welcomeImage from "data-base64:~assets/wisher-auth.png"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { ItemsGraphQL } from "~gql/hooks/items"
import { useSignInGraphQL } from "~gql/hooks/signin"
import { useUserGraphQL } from "~gql/hooks/user"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"
import { Header } from "~views/widgets/header/header"

export const LoginPage = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const { wisherJWT, onLogin } = useSignInGraphQL()

  const { mutate, isSuccess } = useUserGraphQL()

  const { mutate: itemsMutate, isSuccess: itemsIsSuccess } = ItemsGraphQL()

  useEffect(() => {
    if (wisherJWT !== null && !isSuccess && !itemsIsSuccess) {
      const token = wisherJWT.token

      mutate(token)
      itemsMutate(token)
    }

    if (isSuccess && itemsIsSuccess) {
      setIsLoading(false)

      navigate("/wisher/wishes")
    }
  }, [wisherJWT, isSuccess, itemsIsSuccess])

  const onGoogleLoginClick = () => {
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

              <span>SIGN UP WITH GOOGLE</span>

              <Loader size={5.5} isLoading={isLoading} />
            </div>
          </Button>

          <ButtonNav link="/wisher">DO IT LATER</ButtonNav>
        </div>
      </main>
    </div>
  )
}
