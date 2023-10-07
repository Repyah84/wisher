import { Outlet } from "react-router-dom"

import { UserPanel } from "~views/widgets/user-panel/user-panel"

export const WishesPage = () => {
  return (
    <div className="extensions-wisher-wishes-page">
      <UserPanel />

      <Outlet></Outlet>
    </div>
  )
}
