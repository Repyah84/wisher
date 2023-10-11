import svgIcon from "data-base64:~assets/empty-collection.svg"
import { useContext } from "react"

import { Button } from "~views/components/button/button"
import { AddCircle } from "~views/components/icons/add-circle/add-circle"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const WisherCollectionEmpty = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const onAddClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "add-to-collection" }))
  }

  return (
    <div className="extensions-wisher-collection-empty">
      <img width={104} height={104} src={svgIcon} alt="Empty Collection" />

      <p className="extensions-wisher-collection-empty__description">
        You haven’t added any saved wishes to this collection yet.
      </p>

      <div className="extensions-wisher-collection-empty__action">
        <Button size="md" btnColor="primary" onClickFn={onAddClick}>
          <AddCircle /> ADD TO COLLECTION
        </Button>
      </div>

      <p className="extensions-wisher-collection-empty__description">
        Don’t have any ideas ? No worries, adding your wishes is so easy with
        Wisher!
      </p>
    </div>
  )
}
