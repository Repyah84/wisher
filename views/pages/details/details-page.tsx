import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { Help } from "~views/components/help/help"
import { useAsyncStoreDataWithContext } from "~views/hooks/async-store-data"
import { DetailsOptions } from "~views/widgets/details-options/details-options"
import { UserPanel } from "~views/widgets/user-panel/user-panel"

export const DetailsPage = () => {
  const user = useSelector(({ user: { data } }: RootState) => data)

  const {
    wisherSate: { isDetailsHelp },
    setStoreDataDetailsHelp
  } = useAsyncStoreDataWithContext()

  const messageClosed = () => {
    setStoreDataDetailsHelp(false)
  }

  return (
    <div className="extensions-wisher-details-page">
      <UserPanel />

      <Help
        hasBtnClose={true}
        hasMessage={isDetailsHelp && user === null}
        onMessageClosed={messageClosed}>
        Create an account to back up all of the wishes, sync with other devices,
        and enable more awesome features of this app.
      </Help>

      <DetailsOptions />
    </div>
  )
}
