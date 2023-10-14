import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithCredential
} from "firebase/auth"
import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { auth } from "~firebase"
import { toggleUser } from "~store/slice/user"
import { useAppDispatch, useAppSelector } from "~store/store"

setPersistence(auth, browserLocalPersistence)

export const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(false)

  const user = useAppSelector(({ userStore: { user } }) => user)

  const dispatch = useAppDispatch()

  const onLogout = async () => {
    setIsLoading(true)

    if (user) {
      await auth.signOut()
    }
  }

  const onLogin = async () => {
    setIsLoading(true)

    const token = await sendToBackground<any, string>({
      name: "authToken"
    })

    try {
      void signInWithCredential(
        auth,
        GoogleAuthProvider.credential(null, token)
      )
    } catch (error) {
      setIsLoading(false)

      console.error(error)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false)

      dispatch(toggleUser(user))
    })
  }, [])

  return {
    isLoading,
    user,
    onLogin,
    onLogout
  }
}
