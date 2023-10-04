import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigation = useNavigate()

  return (
    <div>
      <h2>Login Page</h2>

      <button onClick={() => navigation("/")}>Home</button>
    </div>
  )
}
