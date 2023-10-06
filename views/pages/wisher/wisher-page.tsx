import { Outlet } from "react-router-dom"

import { Footer } from "~views/components/footer/footer"
import { Header } from "~views/components/header/header"

export const WisherPage = () => {
  return (
    <div className="extensions-wisher-page">
      <Header />

      <Outlet></Outlet>

      <Footer />
    </div>
  )
}
