import { Navigate, Route, Routes } from "react-router-dom"

import { AddWisherPage } from "~views/pages/add-wisher/add-wisher-page"
import { AllWishesPage } from "~views/pages/all-wishes/all-wishes-page"
import { LoginPage } from "~views/pages/login/login-page"
import { WisherPage } from "~views/pages/wisher/wisher-page"
import { WishesCollectionsPage } from "~views/pages/wishes-collections/wishes-collections"
import { WishesPage } from "~views/pages/wishes/wishes-page"
import { Root } from "~views/root"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"

export const WisherRoutes = () => (
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

        <Route path="add-wisher" element={<AddWisherPage />}>
          {/* <Route path="" element={<Navigate to={"wisher-empty-data"} />} />

          <Route path="wisher-empty-data" element={<WisherEmptyData />} /> */}
        </Route>
      </Route>

      <Route path="login" element={<LoginPage />} />
    </Route>
  </Routes>
)
