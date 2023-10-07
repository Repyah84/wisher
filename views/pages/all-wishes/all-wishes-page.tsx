import svgIcon from "data-base64:~assets/wisher-list.svg"

import { Button } from "~views/components/button/button"

export const AllWishesPage = () => {
  const allWishes = null

  return (
    <div className="extensions-wisher-all-wishes-page">
      {allWishes === null ? (
        <div className="extensions-wisher-all-wishes-page__empty-list">
          <img width={104} height={104} src={svgIcon} alt="empty" />

          <h3 className="extensions-wisher-all-wishes-page__title">
            Your wish list is empty :(
          </h3>

          <p className="extensions-wisher-all-wishes-page__description">
            No worries, adding your wishes is so easy with Wisher
          </p>

          <p className="extensions-wisher-all-wishes-page__description">
            Need help ?
          </p>

          <div className="extensions-wisher-all-wishes-page__action">
            <Button btnType="stroke" onClickFn={() => console.log("click")}>
              <span>how to create my first wish ?</span>
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
