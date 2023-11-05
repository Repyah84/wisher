import {
  browserLocalPersistence,
  getRedirectResult,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithCredential,
  signInWithRedirect,
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

  const onAppleLogin = async () => {
    setIsLoading(true)

    const provider = new OAuthProvider("apple.com")

    try {
      signInWithRedirect(auth, provider)
    } catch (error) {
      console.error()
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
    getRedirectResult(auth).then((user) => {
      setIsLoading(false)
    })

    onAuthStateChanged(auth, (user) => {
      setIsLoading(false)

      setUser(user)
    })
  }, [])

  return {
    isLoading,
    user,
    onLogin,
    onLogout,
    onAppleLogin
  }
}
