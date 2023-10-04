import { useNavigate } from "react-router-dom"

import HomePageModuleCss from "./home-page.module.scss"

export const HomePage = () => {
  const navigation = useNavigate()

  return (
    <div className="home-page">
      <h2>Home Page</h2>

      <button onClick={() => navigation("/login")}>Login</button>
    </div>
  )
}
