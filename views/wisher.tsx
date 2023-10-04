import { MemoryRouter } from "react-router-dom"

import { WisherRoutes } from "~routes/wisher.router"

import { Badge } from "./components/badge/badge"
import { Header } from "./components/header/header"

interface Props {
  isHide: boolean
  onClickFn: () => void
}

export const Wisher = ({ isHide, onClickFn }: Props) => {
  return (
    <div
      className={`${
        isHide ? "" : "extensions-wisher--show"
      } extensions-wisher`}>
      <Badge onClickFn={onClickFn} />

      <Header />

      <MemoryRouter>
        <WisherRoutes />
      </MemoryRouter>
    </div>
  )
}
