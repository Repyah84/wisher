import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import { OverLay } from "~views/components/overlay/overlay"
import { Wisher } from "~views/wisher"

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Context = () => {
  const [isHide, setIsHide] = useState(true)
  const [initial, setInitial] = useState(false)

  const onBadgeClick = () => {
    setIsHide(!isHide)
    setInitial(true)
  }

  const onWisherClose = () => {
    setIsHide(true)
  }

  return (
    <div className="extensions-washer-host">
      <OverLay onClickFn={onWisherClose} isHide={isHide} initial={initial} />

      <Wisher
        isHide={isHide}
        onClickFn={onBadgeClick}
        onWisherCloseFn={onWisherClose}
      />
    </div>
  )
}

export default Context
