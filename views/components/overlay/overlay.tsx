import { useContext, useEffect, useState } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const OverLay = () => {
  const {
    wisherSate: { isShow },
    setWisherState: setWisherSate
  } = useContext(WisherStateContext)

  const [isOverLay, setIsOverLay] = useState(false)

  const animationEnd = () => {
    if (isShow) {
      return
    }

    setIsOverLay(false)
  }

  const onOverLayClick = () => {
    setWisherSate((wisher) => ({ ...wisher, isShow: false }))
  }

  useEffect(() => {
    if (!isShow) {
      return
    }

    setIsOverLay(true)
  }, [isShow])

  return isOverLay ? (
    <div
      is-overlay={isShow.toString()}
      className="extensions-wisher-overlay"
      onAnimationEnd={animationEnd}
      onClick={onOverLayClick}></div>
  ) : (
    <></>
  )
}
