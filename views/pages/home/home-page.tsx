import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigation = useNavigate()

  return (
    <div className="extensions-wisher-home-page">
      <h2>Home Page</h2>

      <button onClick={() => navigation("/login")}>Login</button>
    </div>
  )
}
