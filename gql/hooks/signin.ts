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
  const { user, isLoading, onLogin } = useFirebaseAuth()

  const [token] = useStorage<string | null>(
    {
      key: "GOOGLE_AUTH_TOKEN",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const [wisherJWT, setWisherJWT] = useStorage<StoreJWT | null>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const [mutate, { data: isSuccess, error }] = useMutation(signIn)

  useEffect(() => {
    console.log("#############", token)

    if (token === null) {
      return
    }

    rec(token)
  }, [token])

  useEffect(() => {
    if (user === null) {
      return
    }

    if ("accessToken" in user) {
      rec(user.accessToken as string)
    }
  }, [user])

  const rec = (accessToken: string) => {
    console.log("@@@@@@@@@", accessToken)

    mutate({
      variables: {
        idToken: accessToken as string
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

  return {
    wisherJWT,
    error,
    isSuccess,
    isLoading,
    onLogin
  }
}
