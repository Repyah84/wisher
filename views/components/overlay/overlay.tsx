import { useDispatch, useSelector } from "react-redux"

import { toggleWisherSate } from "~store/wisher-state"

export const OverLay = () => {
  const initial = useSelector(({ initial: { isInitial } }) => isInitial)
  const isShow = useSelector(({ wisher: { isShow } }) => isShow)

  const dispatch = useDispatch()

  return (
    <div
      host-initial={initial.toString()}
      className={`${
        isShow
          ? "extensions-wisher-overlay--show"
          : "extensions-wisher-overlay--hide"
      } extensions-wisher-overlay`}
      onClick={() => dispatch(toggleWisherSate(false))}></div>
  )
}
