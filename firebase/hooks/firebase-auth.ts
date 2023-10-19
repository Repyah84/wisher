import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithCredential,
  type User
} from "firebase/auth"
import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { auth } from "~firebase"

setPersistence(auth, browserLocalPersistence)

export const useFirebaseAuth = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState<User | null>(null)

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

      setUser(user)
    })
  }, [])

  return {
    isLoading,
    user,
    onLogin,
    onLogout
  }
}
