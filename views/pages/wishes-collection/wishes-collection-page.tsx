import { useParams } from "react-router-dom"

import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { WisherCollectionEmpty } from "~views/widgets/wishes-collection-empty/wishes-collection-empty"

export const CollectionPage = () => {
  const collectionData = null

  const onBackClick = () => {}

  const { name } = useParams()

  return (
    <div className="extensions-wisher-collection-page">
      <div className="extensions-wisher-collection-page__header">
        <Button btnType="icon" onClickFn={onBackClick}>
          <ArrowLeftSvgIcon />
        </Button>
      </div>

      <div className="extensions-wisher-collection-page__info">
        <h2 className="extensions-wisher-collection-page__title">{name}</h2>
      </div>

      {collectionData === null ? <WisherCollectionEmpty /> : <></>}
    </div>
  )
}
