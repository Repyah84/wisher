import { useContext } from "react"

import { useMount } from "~hooks/mount"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const OverLay = () => {
  const {
    wisherSate: { isShow },
    setWisherState: setWisherSate
  } = useContext(WisherStateContext)

  const { state, animationEnd } = useMount(isShow)

  const onOverLayClick = () => {
    setWisherSate((wisher) => ({ ...wisher, isShow: false }))
  }

  return state ? (
    <div
      is-overlay={isShow.toString()}
      className="extensions-wisher-overlay"
      onAnimationEnd={animationEnd}
      onClick={onOverLayClick}></div>
  ) : (
    <></>
  )
}
