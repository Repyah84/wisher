import { Outlet } from "react-router-dom"

import { Footer } from "~views/widgets/footer/footer"
import { Header } from "~views/widgets/header/header"

export const WisherPage = () => {
  return (
    <div className="extensions-wisher-page">
      <Header />

      <Outlet></Outlet>

      <Footer />
    </div>
  )
}
