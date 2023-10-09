import { useContext } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const OverLay = () => {
  const {
    wisherSate: { isInitial, isShow },
    setWisherState: setWisherSate
  } = useContext(WisherStateContext)

  const updateWisher = () => {
    setWisherSate((wisher) => ({ ...wisher, isShow: false }))
  }

  return (
    <div
      host-initial={isInitial.toString()}
      className={`${
        isShow
          ? "extensions-wisher-overlay--show"
          : "extensions-wisher-overlay--hide"
      } extensions-wisher-overlay`}
      onClick={updateWisher}></div>
  )
}
