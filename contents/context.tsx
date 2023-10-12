import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import { PersistGate } from "@plasmohq/redux-persist/integration/react"

import { WisherRoutes } from "~routes/wisher.router"
import { persistor, store } from "~store/store"
import { OverLay } from "~views/components/overlay/overlay"
import { WisherContext } from "~views/context/wisher/wisher.context"

export const config: PlasmoCSConfig = {
  matches: ["https://www.wishr.app/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Context = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WisherContext>
          <OverLay />

          <MemoryRouter>
            <WisherRoutes />
          </MemoryRouter>
        </WisherContext>
      </PersistGate>
    </Provider>
  )
}

export default Context
