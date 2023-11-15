import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import { auth } from "~firebase"
import { logout } from "~store/actions/logout"

export const useLogout = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  return () => {
    auth.signOut().then(() => {
      const storage = new Storage({ area: "local" })

      Promise.all([
        storage.set("GOOGLE_AUTH_TOKEN", null),
        storage.set("JWT", null)
      ]).then(() => {
        dispatch(logout())

        navigate("/login")
      })
    })
  }
}
