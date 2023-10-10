import { Outlet } from "react-router-dom"

import { UserPanel } from "~views/widgets/user-panel/user-panel"
import { WishesNav } from "~views/widgets/wishes-nav/wishes-nav"

export const WishesPage = () => {
  return (
    <div className="extensions-wisher-wishes-page">
      <UserPanel />

      <WishesNav />

      <Outlet></Outlet>
    </div>
  )
}
