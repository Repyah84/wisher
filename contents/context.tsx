import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import { PersistGate } from "@plasmohq/redux-persist/integration/react"

import { WisherRoutes } from "~routes/wisher.router"
import { mockStore } from "~store/store"
import { OverLay } from "~views/components/overlay/overlay"

export const config: PlasmoCSConfig = {
  matches: ["https://www.wishr.app/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Context = () => {
  return (
    <Provider store={mockStore}>
      <div className="extensions-washer-host">
        <OverLay />

        <MemoryRouter>
          <WisherRoutes />
        </MemoryRouter>
      </div>
    </Provider>
  )
}

export default Context
