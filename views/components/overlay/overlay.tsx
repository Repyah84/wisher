import { useContext } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useMount } from "~views/hooks/mount"

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
