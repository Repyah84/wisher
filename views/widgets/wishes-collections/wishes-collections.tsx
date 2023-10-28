import optionSvgIcon from "data-base64:~assets/option-bar.svg"
import { useContext, useMemo } from "react"
import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { FileSvgIcon } from "~views/components/icons/file/file"
import { Loader } from "~views/components/loader/loader"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { WishesCollection } from "~views/widgets/wishes-collection/wishes-collection"

interface Props {
  collections: string[]
}

export const WishesCollections = ({ collections }: Props) => {
  const { setWisherState } = useContext(WisherStateContext)

  const collectionsWithImage = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const loading = useMemo(() => {
    return collections.length !== collectionsWithImage.length
  }, [collectionsWithImage, collections])

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

          {loading ? (
            <div className="extensions-wisher-wishes-collection__loader">
              <Loader size={5.5} isLoading={true} />
            </div>
          ) : (
            <Button btnType="icon">
              <img src={optionSvgIcon} width={24} height={24} alt="Option" />
            </Button>
          )}
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
