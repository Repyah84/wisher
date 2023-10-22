import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createUploadLink } from "apollo-upload-client"
import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import { WisherRoutes } from "~routes/wisher.router"
import { wisherStore } from "~store/wisher.store"
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

const uploadLink = createUploadLink({
  uri: process.env.PLASMO_PUBLIC_API_GQL
})

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache()
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const Context = () => {
  return (
    <Provider store={wisherStore}>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <WisherContext>
            <OverLay />

            <MemoryRouter>
              <WisherRoutes />
            </MemoryRouter>
          </WisherContext>
        </QueryClientProvider>
      </ApolloProvider>
    </Provider>
  )
}

export default Context
