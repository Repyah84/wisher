import searchSvgIcon from "data-base64:~assets/search.svg"
import sortSvgIcon from "data-base64:~assets/sort.svg"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useGetItemsLazy } from "~gql/hooks/items"
import { resetCollection } from "~store/slices/collection"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { InfiniteScroll } from "~views/components/infinite-scroll/infinite-scroll"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { SortLayout } from "~views/widgets/sort-layout/sort-layout"
import { WishesEmpty } from "~views/widgets/wishes-empty/wishes-empty"
import { Wishes } from "~views/widgets/wishes/wishes"

export const AllWishesPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const { loading, getItems } = useGetItemsLazy()

  const allWishes = useSelector(({ items: { data } }: RootState) => data)

  const onObserverEvent = () => {
    if (loading || allWishes.items.length === allWishes.count) {
      return
    }

    const lastItemIndex = allWishes.items[allWishes.items.length - 1].id

    getItems(10, false, lastItemIndex)
  }

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const onSortIconClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "wishes-sort" }))
  }

  const onSelectedSortParam = () => {
    onPopupClose()

    dispatch(resetCollection())

    getItems(10, true)
  }

  return (
    <>
      <div className="extensions-wisher-all-wishes-page">
        {allWishes.items.length === 0 ? (
          <WishesEmpty />
        ) : (
          <>
            <div className="extensions-wisher-all-wishes-page__panel">
              <span>{allWishes.count} Items</span>

              <div className="extensions-wisher-all-wishes-page__tools">
                <Button onClickFn={() => navigate("/search")} btnType="icon">
                  <img
                    src={searchSvgIcon}
                    width={24}
                    height={24}
                    alt="Search"
                  />
                </Button>

                {loading ? (
                  <div className="extensions-wisher-all-wishes-page__loader">
                    <Loader size={5.5} isLoading={true} />
                  </div>
                ) : (
                  <Button btnType="icon" onClickFn={onSortIconClick}>
                    <img src={sortSvgIcon} width={24} height={24} alt="Sort" />
                  </Button>
                )}
              </div>
            </div>

            <InfiniteScroll observerEventFn={onObserverEvent}>
              <Wishes wishes={allWishes.items} />
            </InfiniteScroll>
          </>
        )}
      </div>

      <Popup
        title="Sort by"
        hasPopup={hasMessage === "wishes-sort"}
        onCloseClick={onPopupClose}>
        <SortLayout onSelectedSortParam={onSelectedSortParam} />
      </Popup>
    </>
  )
}
