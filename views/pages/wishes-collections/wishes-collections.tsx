import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useState } from "react"

import { Button } from "~views/components/button/button"
import { Help } from "~views/components/help/help"
import { FileSvgIcon } from "~views/components/icons/file/file"
import { Popup } from "~views/components/popup/popup"

export const WishesCollectionsPage = () => {
  const collections = null

  const [popup, setPopup] = useState(false)

  const togglePopup = () => {
    setPopup((value) => !value)
  }

  return (
    <>
      <div className="extensions-wisher-wishes-collections-page">
        {collections === null ? (
          <div className="extensions-wisher-wishes-collections-page__empty">
            <img width={104} height={104} src={svgIcon} alt="empty" />

            <h3 className="extensions-wisher-wishes-collections-page__title">
              No collections
            </h3>

            <p className="extensions-wisher-wishes-collections-page__description">
              Keep your gifts and wishes organised with various <br />
              collections.
            </p>

            <div className="extensions-wisher-wishes-collections-page__action">
              <Button btnColor="primary" onClickFn={togglePopup}>
                <FileSvgIcon></FileSvgIcon>
                <span>new collection</span>
              </Button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <Popup
        title="Create the collection"
        hasPopup={popup}
        hidePopupFn={togglePopup}>
        <Help hasBtnClose={true}>
          Keep your gifts and wishes organized with various collections. Here
          are some collection ideas for you to get started: <br />
          Birthday <br />
          Wedding registry <br />
          My Little Black Dress <br />
          My top sneakers <br />
          For parents <br />
          Tip: don’t forget to share your collections with friends and family!
        </Help>
      </Popup>
    </>
  )
}
