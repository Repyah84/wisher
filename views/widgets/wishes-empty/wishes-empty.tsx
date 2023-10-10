import svgIcon from "data-base64:~assets/wisher-list.svg"
import { useContext } from "react"

import { Button } from "~views/components/button/button"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const WishesEmpty = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const onBtnHelpClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "create-wisher" }))
  }

  return (
    <div className="extensions-wisher-wishes-empty">
      <img width={104} height={104} src={svgIcon} alt="empty" />

      <h3 className="extensions-wisher-wishes-empty__title">
        Your wish list is empty :(
      </h3>

      <p className="extensions-wisher-wishes-empty__description">
        No worries, adding your wishes is so easy with Wisher
      </p>

      <p className="extensions-wisher-wishes-empty__description">Need help ?</p>

      <div className="extensions-wisher-wishes-empty__action">
        <Button btnType="stroke" btnColor="primary" onClickFn={onBtnHelpClick}>
          <span>HOW TO CREATE FIST WISH ?</span>
        </Button>
      </div>
    </div>
  )
}
