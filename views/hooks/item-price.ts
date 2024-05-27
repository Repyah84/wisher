import getSymbolFromCurrency from "currency-symbol-map"
import { useMemo } from "react"

export const useItemPrice = (price: number, currency: string) => {
  const priceValue = useMemo(() => {
    if (!price) {
      return null
    }

    const symbol = getSymbolFromCurrency(currency)

    if (!currency || currency === "null" || symbol === undefined) {
      return price
    }

    return `${symbol}${price}`
  }, [currency, price])

  return priceValue
}
