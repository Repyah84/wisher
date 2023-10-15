import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { Badge } from "./components/badge/badge"
import { WisherStateContext } from "./context/wisher/wisher.context"

export const Root = () => {
  const {
    wisherSate: { isShow }
  } = useContext(WisherStateContext)

  return (
    <div is-show={isShow.toString()} className="extensions-wisher-root">
      <Badge />

      <Outlet></Outlet>
    </div>
  )
}
