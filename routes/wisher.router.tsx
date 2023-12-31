import { Navigate, Route, Routes } from "react-router-dom"

import { AboutPage } from "~views/pages/about/about-page"
import { AccountSettingsPage } from "~views/pages/account-settings/account-settings-page"
import { AddWisherPage } from "~views/pages/add-wisher/add-wisher-page"
import { AllWishesPage } from "~views/pages/all-wishes/all-wishes-page"
import { DetailsPage } from "~views/pages/details/details-page"
import { EditWisherPage } from "~views/pages/edit/edit"
import { ErrorPage } from "~views/pages/error/error-page"
import { HelpPage } from "~views/pages/help/help-page"
import { InitialPage } from "~views/pages/initial/initial-page"
import { ItemEditPage } from "~views/pages/item-edit/item-edit-page"
import { LoginPage } from "~views/pages/login/login-page"
import { PersonalInfoPage } from "~views/pages/personal-info/personal-info"
import { SearchPage } from "~views/pages/search/search-page"
import { SettingsPage } from "~views/pages/settings/settings-page"
import { WisherItemPage } from "~views/pages/wisher-item/wisher-item"
import { WisherPage } from "~views/pages/wisher/wisher-page"
import { CollectionPage } from "~views/pages/wishes-collection/wishes-collection-page"
import { WishesCollectionsPage } from "~views/pages/wishes-collections/wishes-collections-page"
import { WishesPage } from "~views/pages/wishes/wishes-page"
import { Root } from "~views/root"

export const WisherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<Navigate to={"initial"} />} />

        <Route path="wisher" element={<WisherPage />}>
          <Route path="" element={<Navigate to={"wishes"} />} />

          <Route path="wishes" element={<WishesPage />}>
            <Route path="" element={<Navigate to={"wishes-all"} />} />

            <Route path="wishes-all" element={<AllWishesPage />} />

            <Route
              path="wishes-collections"
              element={<WishesCollectionsPage />}
            />
          </Route>

          <Route path="wishes-collection" element={<CollectionPage />} />

          <Route path="wisher-add" element={<AddWisherPage />} />

          <Route path="details" element={<DetailsPage />} />

          <Route path="details-settings" element={<SettingsPage />} />

          <Route path="details-help" element={<HelpPage />} />

          <Route path="details-about" element={<AboutPage />} />

          <Route
            path="details-account-settings"
            element={<AccountSettingsPage />}
          />
        </Route>

        <Route path="personal-info" element={<PersonalInfoPage />} />

        <Route path="wisher-item" element={<WisherItemPage />} />

        <Route path="wisher-item-edit" element={<ItemEditPage />} />

        <Route path="wisher-edit" element={<EditWisherPage />} />

        <Route path="search" element={<SearchPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="initial" element={<InitialPage />} />

        <Route path="error" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
