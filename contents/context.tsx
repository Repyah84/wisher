import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import cssText from "data-text:~/contents/context.scss"
import type { PlasmoCSConfig } from "plasmo"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import { WisherRoutes } from "~routes/wisher.router"
import { wisherStore } from "~store/wisher.store"
import { OverLay } from "~views/components/overlay/overlay"
import { Snackbar } from "~views/components/snackbar/snackbar"
import { WisherContext } from "~views/context/wisher/wisher.context"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  // matches: [
  //   "https://www.amazon.com/*",
  //   "https://driffle.com/*",
  //   "https://www.google.com/*",
  //   "https://www.bogner.com/*",
  //   "https://www.wishr.app/*",
  //   "https://rozetka.com.ua/*",
  //   "https://modelistam.com.ua/*"
  // ],
  exclude_matches: [
    "https://auth.wishr.app/*",
    "https://accounts.google.com/*",
    "https://iwish-c82a4.firebaseapp.com/*",
    "https://appleid.apple.com/auth/*"
  ],
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

const Context = () => {
  return (
    <Provider store={wisherStore}>
      <ApolloProvider client={client}>
        <WisherContext>
          <OverLay />

          <MemoryRouter>
            <WisherRoutes />
          </MemoryRouter>

          <Snackbar />
        </WisherContext>
      </ApolloProvider>
    </Provider>
  )
}

export default Context
