import getSymbolFromCurrency from "currency-symbol-map"
import circleSvg from "data-base64:~assets/circle.svg"
import emptyImage from "data-base64:~assets/garage.png"
import { useNavigate } from "react-router-dom"

import type { Item } from "~gql/types/graphql"

import { WishDate } from "../date/date"
import { Rating } from "../rating/rating"

interface Props {
  wish: Item
}

export const Wisher = ({
  wish: {
    price,
    imageUrl,
    currency,
    title,
    faviconUrl,
    marketplace,
    createdAt,
    personalRating,
    id
  }
}: Props) => {
  const navigate = useNavigate()

  const priceValue = `${getSymbolFromCurrency(currency)}${price}`

  const onItemClick = () => {
    navigate(`/wisher-item/${id}`)
  }

  return (
    <div onClick={onItemClick} className="extensions-wisher-item">
      <div className="extensions-wisher-item__header">
        <div className="extensions-wisher-item__marketplace">
          <img
            width={16}
            height={16}
            src={faviconUrl || circleSvg}
            alt="Domain icon"
          />

          <span>{marketplace || "Domain without icon"}</span>
        </div>

        <WishDate date={createdAt} />
      </div>

      <img
        style={{
          objectFit: "contain"
        }}
        width={104}
        height={104}
        className="extensions-wisher-item__image"
        src={imageUrl || emptyImage}
        alt="Wisher image"
      />

      <div className="extensions-wisher-item__info">
        <span className="extensions-wisher-item__description">{title}</span>

        <span className="extensions-wisher-item__price">{priceValue}</span>

        <Rating itemWidth={20} rating={personalRating} />
      </div>
    </div>
  )
}
