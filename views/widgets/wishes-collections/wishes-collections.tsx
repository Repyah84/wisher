import optionSvgIcon from "data-base64:~assets/option-bar.svg"
import { useContext } from "react"

import { Button } from "~views/components/button/button"
import { FileSvgIcon } from "~views/components/icons/file/file"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { WishesCollection } from "~views/widgets/wishes-collection/wishes-collection"

interface Props {
  collections: string[]
}

export const WishesCollections = ({ collections }: Props) => {
  const { setWisherState } = useContext(WisherStateContext)

  const onAddCollectionClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "create-collection" }))
  }

  return (
    <div className="extensions-wisher-wishes-collection">
      <div className="extensions-wisher-wishes-collection__header">
        <span>{collections.length} Collections</span>

        <div className="extensions-wisher-wishes-collection__tools">
          <Button onClickFn={onAddCollectionClick} btnType="icon">
            <FileSvgIcon />
          </Button>

          <Button btnType="icon">
            <img src={optionSvgIcon} width={24} height={24} alt="Option" />
          </Button>
        </div>
      </div>

      <div className="extensions-wisher-wishes-collection__scroll-bar">
        {collections.map((name) => (
          <WishesCollection key={name} collectionName={name} />
        ))}
      </div>
    </div>
  )
}
