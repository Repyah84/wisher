import { useContext } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { WisherSvgIcon } from "../icons/wisher/wisher"

export const Badge = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const updateWisher = () => {
    setWisherState((wisher) => ({
      ...wisher,
      isShow: !wisher.isShow,
      hasMessage: null
    }))
  }

  return (
    <div onClick={updateWisher} className="extensions-wisher-badge">
      <WisherSvgIcon />
    </div>
  )
}
