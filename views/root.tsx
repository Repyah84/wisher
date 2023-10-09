import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { Badge } from "./components/badge/badge"
import { WisherStateContext } from "./context/wisher/wisher.context"

export const Root = () => {
  const {
    wisherSate: { isShow }
  } = useContext(WisherStateContext)

  return (
    <div
      className={`${
        isShow ? "extensions-wisher-root--show" : ""
      } extensions-wisher-root`}>
      <Badge />

      <Outlet></Outlet>
    </div>
  )
}
