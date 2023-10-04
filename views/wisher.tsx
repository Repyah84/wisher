import { MemoryRouter } from "react-router-dom"

import { WisherRoutes } from "~routes/wisher.router"

export const Wisher = () => (
  <div className="wisher">
    <MemoryRouter>
      <WisherRoutes />
    </MemoryRouter>
  </div>
)
