import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { WisherCollectionEmpty } from "~views/widgets/wishes-collection-empty/wishes-collection-empty"

export const CollectionPage = () => {
  const collectionData = null

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const navigate = useNavigate()

  const { name } = useParams()

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  return (
    <>
      <div className="extensions-wisher-collection-page">
        <div className="extensions-wisher-collection-page__header">
          <Button
            btnType="icon"
            onClickFn={() => navigate("/wisher/wishes/wishes-collections")}>
            <ArrowLeftSvgIcon />
          </Button>
        </div>

        <div className="extensions-wisher-collection-page__info">
          <h2 className="extensions-wisher-collection-page__title">{name}</h2>
        </div>

        {collectionData === null ? <WisherCollectionEmpty /> : <></>}
      </div>

      <Popup
        title="0 wishes selected"
        hasPopup={hasMessage === "add-to-collection"}
        onCloseClick={onPopupClose}>
        <p>Select wishes you want to add to this collection</p>
      </Popup>
    </>
  )
}
