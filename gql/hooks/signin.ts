import { useMutation } from "@tanstack/react-query"
import request from "graphql-request"
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

export const useSignInGraphQL = () => {
  const { user, onLogin } = useFirebaseAuth()

  const [wisherJWT, setWisherJWT] = useStorage<StoreJWT>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: (idToken: string) =>
      request(process.env.PLASMO_PUBLIC_API_GQL, signIn, {
        idToken
      }),
    onSuccess: (data) => {
      const token = data.signIn.token

      const decoder = jwt_decode(token)

      if (typeof decoder === "object" && "exp" in decoder) {
        setWisherJWT({ exp: decoder.exp as number, token })
      }
    }
  })

  useEffect(() => {
    if (user === null) {
      return
    }

    if ("accessToken" in user) {
      mutate(user.accessToken as string)
    }
  }, [user])

  return {
    wisherJWT,
    isError,
    isSuccess,
    onLogin
  }
}
