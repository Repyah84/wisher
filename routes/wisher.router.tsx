import { Route, Routes } from "react-router-dom"

import { HomePage } from "~views/pages/home/home-page"
import { LoginPage } from "~views/pages/login/login-page"

export const WisherRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
)
