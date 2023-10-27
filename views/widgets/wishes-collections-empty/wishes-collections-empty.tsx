import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useContext } from "react"

import { Button } from "~views/components/button/button"
import { FileSvgIcon } from "~views/components/icons/file/file"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const WishesCollectionsEmpty = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const onAddCollectionClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "create-collection" }))
  }

  return (
    <div className="extensions-wisher-wishes-collections-empty">
      <img width={104} height={104} src={svgIcon} alt="empty" />

      <h3 className="extensions-wisher-wishes-collections-empty__title">
        No collections
      </h3>

      <p className="extensions-wisher-wishes-collections-empty__description">
        Keep your gifts and wishes organised with various <br />
        collections.
      </p>

      <div className="extensions-wisher-wishes-collections-empty__action">
        <Button btnColor="primary" onClickFn={onAddCollectionClick} size="md">
          <FileSvgIcon />
          <span>NEW COLLECTION</span>
        </Button>
      </div>

      <p className="extensions-wisher-wishes-collections-empty__description">
        Here are some collection ideas for you to get started:
      </p>

      <div className="extensions-wisher-wishes-collections-empty__ideas"></div>
    </div>
  )
}
