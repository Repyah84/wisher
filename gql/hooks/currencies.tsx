import { useQuery } from "@tanstack/react-query"
import request from "graphql-request"

import { currencies } from "~gql/schema/currencies"

export const useCurrenciesGraphQL = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["currencies"],
    queryFn: () => request(process.env.PLASMO_PUBLIC_API_GQL, currencies)
  })

  return { data, isLoading, isSuccess }
}
