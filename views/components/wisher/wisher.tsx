import circleSvg from "data-base64:~assets/circle.svg"
import emptyImage from "data-base64:~assets/garage.png"

import type { Item } from "~gql/types/graphql"
import { useItemPrice } from "~views/hooks/item-price"

import { WishDate } from "../date/date"
import { Label } from "../label/label"
import { RatingSimple } from "../rating-simple/rating-simple"
import { RatingTitle } from "../rating-title/rating-title"

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
    isPurchased
  }
}: Props) => {
  const priceValue = useItemPrice(price, currency)

  return (
    <div className="extensions-wisher-item">
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
        <span
          is-purchased={isPurchased?.toString()}
          className="extensions-wisher-item__description">
          {title}
        </span>

        {isPurchased ? (
          <Label labelType="primary" title="Purchased" />
        ) : (
          <span className="extensions-wisher-item__price">{priceValue}</span>
        )}

        <div className="extensions-wisher-item__rating">
          <RatingSimple rating={personalRating} size={16} />

          <RatingTitle rating={personalRating} />
        </div>
      </div>
    </div>
  )
}
