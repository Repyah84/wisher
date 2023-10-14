import { Navigate, Route, Routes } from "react-router-dom"

import { AboutPage } from "~views/pages/about/about-page"
import { AccountSettingsPage } from "~views/pages/account-settings/account-settings-page"
import { AddWisherPage } from "~views/pages/add-wisher/add-wisher-page"
import { AllWishesPage } from "~views/pages/all-wishes/all-wishes-page"
import { DetailsPage } from "~views/pages/details/details-page"
import { HelpPage } from "~views/pages/help/help-page"
import { LoginPage } from "~views/pages/login/login-page"
import { SettingsPage } from "~views/pages/settings/settings-page"
import { WisherPage } from "~views/pages/wisher/wisher-page"
import { CollectionPage } from "~views/pages/wishes-collection/wishes-collection-page"
import { WishesCollectionsPage } from "~views/pages/wishes-collections/wishes-collections"
import { WishesPage } from "~views/pages/wishes/wishes-page"
import { Root } from "~views/root"

export const WisherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<Navigate to={"login"} />} />

        <Route path="wisher" element={<WisherPage />}>
          <Route path="" element={<Navigate to={"wishes"} />} />

          <Route path="wishes" element={<WishesPage />}>
            <Route path="" element={<Navigate to={"all-wishes"} />} />

            <Route path="all-wishes" element={<AllWishesPage />} />

            <Route
              path="wishes-collections"
              element={<WishesCollectionsPage />}
            />
          </Route>

          <Route path="wishes-collection/:name" element={<CollectionPage />} />

          <Route path="add-wisher" element={<AddWisherPage />} />

          <Route path="details" element={<DetailsPage />} />

          <Route path="details-settings" element={<SettingsPage />} />

          <Route path="details-help" element={<HelpPage />} />

          <Route path="details-about" element={<AboutPage />} />

          <Route
            path="details-account-settings"
            element={<AccountSettingsPage />}
          />
        </Route>

        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
