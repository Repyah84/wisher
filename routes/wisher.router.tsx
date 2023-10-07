import { Navigate, Route, Routes } from "react-router-dom"

import { AllWishesPage } from "~views/pages/all-wishes/all-wishes-page"
import { LoginPage } from "~views/pages/login/login-page"
import { WisherPage } from "~views/pages/wisher/wisher-page"
import { WishesCollectionsPage } from "~views/pages/wishes-collections/wishes-collections"
import { WishesPage } from "~views/pages/wishes/wishes-page"
import { Root } from "~views/root"

export const WisherRoutes = () => (
  <Routes>
    <Route path="/" element={<Root />}>
      <Route path="" element={<Navigate to={"login"}></Navigate>} />

      <Route path="wisher" element={<WisherPage />}>
        <Route path="" element={<Navigate to={"wishes"}></Navigate>} />

        <Route path="wishes" element={<WishesPage />}>
          <Route path="" element={<Navigate to={"all-wishes"}></Navigate>} />

          <Route path="all-wishes" element={<AllWishesPage />} />
          <Route
            path="wishes-collections"
            element={<WishesCollectionsPage />}
          />
        </Route>
      </Route>

      <Route path="login" element={<LoginPage />} />
    </Route>
  </Routes>
)
