import getSymbolFromCurrency from "currency-symbol-map"

import type { Item } from "~gql/types/graphql"

interface Props {
  wish: Item
}

export const Wisher = ({
  wish: { price, imageUrl, currency, title }
}: Props) => {
  const priceValue = `${getSymbolFromCurrency(currency)}${price}`

  return (
    <div className="extensions-wisher-item">
      <img
        width={104}
        height={104}
        className="extensions-wisher-item__image"
        src={imageUrl}
        alt="Wisher image"
      />

      <div className="extensions-wisher-item__info">
        <span className="extensions-wisher-item__description">{title}</span>

        <span className="extensions-wisher-item__price">{priceValue}</span>
      </div>
    </div>
  )
}
