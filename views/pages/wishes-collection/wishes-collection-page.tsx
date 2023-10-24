import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { useGetCollectionItems } from "~gql/hooks/collection-items"
import { useAddItemsToCollection } from "~gql/hooks/collection-items.mutate"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { WisherSelect } from "~views/widgets/wisher-select/wisher-select"
import { WisherCollectionEmpty } from "~views/widgets/wishes-collection-empty/wishes-collection-empty"
import { Wishes } from "~views/widgets/wishes/wishes"

export const CollectionPage = () => {
  const { name } = useParams()

  const navigate = useNavigate()

  const { loading: loadingCollectionItems, getCollectionItems } =
    useGetCollectionItems()

  const { loading, setItemsToCollection } = useAddItemsToCollection()

  const [selectItems, setSelectItem] = useState<string[]>([])

  const collectionItems = useSelector(
    ({ collection: { data } }: RootState) => data
  )

  const items = useSelector(({ items: { data } }: RootState) => data)

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const onSelectItem = (id: string) => {
    if (isSelect(id)) {
      setSelectItem((state) => state.filter((item) => item !== id))

      return
    }
    setSelectItem((state) => [...state, id])
  }

  const isSelect = (id: string) => {
    return selectItems.includes(id)
  }

  const onAddItemsToCollection = () => {
    if (loading || loadingCollectionItems) {
      return
    }

    setItemsToCollection(selectItems, name).then(() => {
      getCollectionItems([name]).then(() => {
        onPopupClose()
      })
    })
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

        {collectionItems === null || collectionItems.length === 0 ? (
          <WisherCollectionEmpty />
        ) : (
          <Wishes wishes={collectionItems} />
        )}
      </div>

      <Popup
        title="0 wishes selected"
        hasPopup={hasMessage === "add-to-collection"}
        onCloseClick={onPopupClose}>
        <p>Select wishes you want to add to this collection</p>

        <div className="extensions-wisher-collection-page__items">
          {items.map((wish) => (
            <WisherSelect
              key={wish.id}
              wish={wish}
              selected={isSelect(wish.id)}
              onSelectFn={onSelectItem}
            />
          ))}
        </div>

        <div className="extensions-wisher-collection-page__action">
          <Button
            size="md"
            btnColor="primary"
            onClickFn={onAddItemsToCollection}>
            <div className="extensions-wisher-collection-page__btn-content">
              <span>add to {name} </span>

              <Loader
                size={5.5}
                isLoading={loading || loadingCollectionItems}
              />
            </div>
          </Button>
        </div>
      </Popup>
    </>
  )
}
