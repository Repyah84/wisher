import svgIcon from "data-base64:~assets/wisher-collection.svg"

import { Button } from "~views/components/button/button"

export const WishesCollectionsPage = () => {
  const collections = null

  return (
    <div className="extensions-wisher-wishes-collections-page">
      {collections === null ? (
        <div className="extensions-wisher-wishes-collections-page__empty">
          <img width={104} height={104} src={svgIcon} alt="empty" />

          <h3 className="extensions-wisher-wishes-collections-page__title">
            No collections
          </h3>

          <p className="extensions-wisher-wishes-collections-page__description">
            Keep your gifts and wishes organised with various <br />{" "}
            collections.
          </p>

          <div className="extensions-wisher-wishes-collections-page__action">
            <Button
              btnColor="primary"
              onClickFn={() => console.log("ADD COLLECTIONS")}>
              new collection
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
