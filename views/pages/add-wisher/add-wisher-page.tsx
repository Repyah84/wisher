import { Outlet } from "react-router-dom"

import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"

export const AddWisherPage = () => {
  const data = null

  return data === null ? (
    <WisherEmptyData />
  ) : (
    <div className="extensions-wisher-add-wisher-page">
      <Outlet />
    </div>
  )
}
