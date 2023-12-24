import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import { logout } from "~store/actions/logout"

export const useLogout = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logoutWithNavigate = () => {
    const storage = new Storage({ area: "local" })

    storage.set("JWT", null).then(() => {
      dispatch(logout())

      navigate("/login")
    })
  }

  const logoutUser = () => {
    const storage = new Storage({ area: "local" })

    storage.set("JWT", null).then(() => {
      dispatch(logout())
    })
  }

  return { logoutUser, logoutWithNavigate }
}
