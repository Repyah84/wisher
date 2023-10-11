import { DetailsOptions } from "~views/widgets/details-options/details-options"
import { UserPanel } from "~views/widgets/user-panel/user-panel"

export const DetailsPage = () => {
  return (
    <div className="extensions-wisher-settings-page">
      <UserPanel />

      <DetailsOptions />
    </div>
  )
}
