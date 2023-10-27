import searchSvgIcon from "data-base64:~assets/search.svg"
import sortSvgIcon from "data-base64:~assets/sort.svg"
import { useSelector } from "react-redux"

import { useGetItemsLazy } from "~gql/hooks/items"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { InteractObserver } from "~views/components/interact-observer/interact-observer"
import { WishesEmpty } from "~views/widgets/wishes-empty/wishes-empty"
import { Wishes } from "~views/widgets/wishes/wishes"

export const AllWishesPage = () => {
  const { loading, getItems } = useGetItemsLazy()

  const allWishes = useSelector(({ items: { data } }: RootState) => data)

  const onObserverEvent = () => {
    if (loading || allWishes.items.length === allWishes.count) {
      return
    }

    const lastItemIndex = allWishes.items[allWishes.items.length - 1].id

    getItems(10, false, lastItemIndex)
  }

  return (
    <div className="extensions-wisher-all-wishes-page">
      {allWishes.items.length === 0 ? (
        <WishesEmpty />
      ) : (
        <>
          <div className="extensions-wisher-all-wishes-page__panel">
            <span>{allWishes.count} Items</span>

            <div className="extensions-wisher-all-wishes-page__tools">
              <Button btnType="icon">
                <img src={searchSvgIcon} width={24} height={24} alt="Search" />
              </Button>

              <Button btnType="icon">
                <img src={sortSvgIcon} width={24} height={24} alt="Sort" />
              </Button>
            </div>
          </div>

          <InteractObserver loading={loading} observerEventFn={onObserverEvent}>
            <Wishes wishes={allWishes.items} />
          </InteractObserver>
        </>
      )}
    </div>
  )
}
