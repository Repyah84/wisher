import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"
import { MemoryRouter } from "react-router-dom"

import { WisherRoutes } from "~routes/wisher.router"
import { OverLay } from "~views/components/overlay/overlay"
import { WisherContext } from "~views/context/wisher/wisher.context"

export const config: PlasmoCSConfig = {
  matches: ["https://www.amazon.com/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const Context = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WisherContext>
        <OverLay />

        <MemoryRouter>
          <WisherRoutes />
        </MemoryRouter>
      </WisherContext>
    </QueryClientProvider>
  )
}

export default Context
