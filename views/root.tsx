import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { initialWisher } from "~store/initial"
import { toggleWisherSate } from "~store/wisher-state"

import { Badge } from "./components/badge/badge"

export const Root = () => {
  const dispatch = useDispatch()

  const isShow = useSelector(({ wisher: { isShow } }) => isShow)

  const onClickFn = () => {
    dispatch(toggleWisherSate(!isShow))
    dispatch(initialWisher(true))
  }

  return (
    <div
      className={`${
        isShow ? "extensions-wisher-root--show" : ""
      } extensions-wisher-root`}>
      <Badge onClickFn={onClickFn} />

      <Outlet></Outlet>
    </div>
  )
}
