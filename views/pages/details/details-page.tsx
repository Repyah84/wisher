import { useContext } from "react"
import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { Help } from "~views/components/help/help"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { DetailsOptions } from "~views/widgets/details-options/details-options"
import { UserPanel } from "~views/widgets/user-panel/user-panel"

export const DetailsPage = () => {
  const user = useSelector(({ user: { data } }: RootState) => data)

  const {
    wisherSate: { isDetailsHelp },
    setWisherState
  } = useContext(WisherStateContext)

  const messageClosed = () => {
    setWisherState((wisher) => ({ ...wisher, isDetailsHelp: false }))
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
