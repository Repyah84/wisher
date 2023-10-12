import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithCredential,
  type User
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { useEffect, useMemo, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { app, auth } from "~firebase"

setPersistence(auth, browserLocalPersistence)

export const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User>(null)

  const firestore = useMemo(() => (user ? getFirestore(app) : null), [user])

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
    firestore,
    onLogin,
    onLogout
  }
}
