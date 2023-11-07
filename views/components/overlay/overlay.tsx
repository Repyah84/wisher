import { useContext } from "react"
import { useDispatch } from "react-redux"

import { resetWisher } from "~store/slices/wisher"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useMount } from "~views/hooks/mount"

export const OverLay = () => {
  const dispatch = useDispatch()

  const {
    wisherSate: { isShow },
    setWisherState: setWisherSate
  } = useContext(WisherStateContext)

  const { state, animationEnd } = useMount(isShow)

  const onOverLayClick = () => {
    dispatch(resetWisher())

    setWisherSate((wisher) => ({ ...wisher, isShow: false, hasMessage: null }))
  }

  return (
    state && (
      <div
        is-overlay={isShow.toString()}
        className="extensions-wisher-overlay"
        onAnimationEnd={animationEnd}
        onClick={onOverLayClick}></div>
    )
  )
}
