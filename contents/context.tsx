import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"

import { Wisher } from "~views/wisher"

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Context = () => <Wisher />

export default Context
