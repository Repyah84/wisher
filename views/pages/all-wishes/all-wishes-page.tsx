import { useSelector } from "react-redux"

import { useGetItemsLazy } from "~gql/hooks/items"
import type { RootState } from "~store/wisher.store"
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

    console.log(
      "))))))))))))))))",
      allWishes.items[allWishes.items.length - 1].id
    )

    const lastItemIndex = allWishes.items[allWishes.items.length - 1].id

    getItems(10, lastItemIndex)
  }

  return (
    <div className="extensions-wisher-all-wishes-page">
      {allWishes.items.length === 0 ? (
        <WishesEmpty />
      ) : (
        <InteractObserver loading={loading} observerEventFn={onObserverEvent}>
          <Wishes wishes={allWishes.items} />
        </InteractObserver>
      )}
    </div>
  )
}
