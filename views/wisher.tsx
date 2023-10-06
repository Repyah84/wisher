import { MemoryRouter } from "react-router-dom"

import { WisherRoutes } from "~routes/wisher.router"

import { Badge } from "./components/badge/badge"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"

interface Props {
  isHide: boolean
  onClickFn: () => void
  onWisherCloseFn: () => void
}

export const Wisher = ({ isHide, onClickFn, onWisherCloseFn }: Props) => {
  return (
    <div
      className={`${
        isHide ? "" : "extensions-wisher--show"
      } extensions-wisher`}>
      <Badge onClickFn={onClickFn} />

      <Header onClickFn={onWisherCloseFn} />

      <MemoryRouter>
        <WisherRoutes />
      </MemoryRouter>

      <Footer />
    </div>
  )
}
