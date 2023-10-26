import { useMutation } from "@apollo/client"
import jwt_decode from "jwt-decode"
import { useEffect } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { useFirebaseAuth } from "~firebase/hooks/firebase-auth"
import { signIn } from "~gql/schema/signIn"

export interface StoreJWT {
  token: string
  exp: number
}

export const useSignInMutate = () => {
  const { user, isLoading, onLogin, onAppleLogin } = useFirebaseAuth()

  const [wisherJWT, setWisherJWT] = useStorage<StoreJWT | null>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const [mutate, { data: isSuccess, error }] = useMutation(signIn)

  useEffect(() => {
    if (user === null) {
      return
    }

    if ("accessToken" in user) {
      mutate({
        variables: {
          idToken: user.accessToken as string
        },
        onCompleted: (data) => {
          const token = data.signIn.token

          const decoder = jwt_decode(token)

          if (typeof decoder === "object" && "exp" in decoder) {
            setWisherJWT({ exp: decoder.exp as number, token })
          }
        }
      })
    }
  }, [user])

  return {
    wisherJWT,
    error,
    isSuccess,
    isLoading,
    onLogin,
    onAppleLogin
  }
}
