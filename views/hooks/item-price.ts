import getSymbolFromCurrency from "currency-symbol-map"
import { useMemo } from "react"

export const useItemPrice = (price: number, currency: string) => {
  const priceValue = useMemo(() => {
    if (!price) {
      return null
    }

    if (!currency || currency === "null") {
      return price
    }

    return `${getSymbolFromCurrency(currency)}${price}`
  }, [currency, price])

  return priceValue
}
