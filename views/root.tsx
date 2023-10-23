import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { Popup } from "~views/components/popup/popup"
import { ItemSetting } from "~views/widgets/item-setting/item-setting"

import { Badge } from "./components/badge/badge"
import { WisherStateContext } from "./context/wisher/wisher.context"

export const Root = () => {
  const {
    wisherSate: { hasMessage, isShow },
    setWisherState
  } = useContext(WisherStateContext)

  const popupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  return (
    <div is-show={isShow.toString()} className="extensions-wisher-root">
      <Badge />

      <Outlet></Outlet>

      <Popup
        title="Item settings"
        hasPopup={hasMessage === "item-setting"}
        onCloseClick={popupClose}>
        <ItemSetting />
      </Popup>
    </div>
  )
}
