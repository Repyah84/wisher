import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useContext, useEffect } from "react"

import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { Header } from "~views/widgets/header/header"

export const ErrorPage = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const { navigateWithRedirect } = useNavigateWithRedirect()

  useEffect(() => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }, [])

  const onBtnClick = () => {
    navigateWithRedirect("/wisher/wishes/wishes-all")
  }

  return (
    <div className="extensions-wisher-error-page">
      <Header />
      <div className="extensions-wisher-error-page__content">
        <img width={104} height={104} src={svgIcon} alt="empty" />

        <h3 className="extensions-wisher-error-page__title">
          Something went wrong, please try again
        </h3>

        <Button btnType="icon" onClickFn={onBtnClick}>
          <ArrowLeftSvgIcon />
          <span>RETURN</span>
        </Button>
      </div>
    </div>
  )
}
