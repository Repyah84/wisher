import { useMemo, type ReactNode } from "react"

interface Props {
  rating: number
  children?: ReactNode
  maxRange?: number
  itemWidth?: number
  onRatingChange?: (rating: number) => void
}

export const Rating = ({
  maxRange = 3,
  children,
  rating,
  itemWidth = 32,
  onRatingChange
}: Props) => {
  const ratingData = useMemo(() => {
    let r = rating + 1

    return new Array(maxRange).fill(null).map(() => (r -= 1))
  }, [maxRange, rating])

  const onItemClick = (value: number) => {
    if (onRatingChange === undefined) {
      return
    }

    let r = rating

    if (value <= 0) {
      r++
    } else {
      r--
    }

    if (r > maxRange || r < 0) {
      return
    }

    onRatingChange(r)
  }

  return (
    <div className="extensions-wisher-rating">
      {children}
      <div className="extensions-wisher-rating__items">
        {ratingData.map((item) => (
          <svg
            style={{
              maxWidth: `${itemWidth}px`,
              minWidth: `${itemWidth}px`,
              cursor: `${onRatingChange === undefined ? "auto" : "pointer"}`
            }}
            key={item}
            onClick={() => onItemClick(item)}
            xmlns="http://www.w3.org/2000/svg"
            fill={item > 0 ? "#000" : "none"}
            viewBox="0 0 32 32">
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m16.55 23.84 6.3 4c.81.5 1.81-.25 1.57-1.2l-1.82-7.16a1.1 1.1 0 0 1 .36-1.1l5.65-4.71c.74-.62.36-1.86-.6-1.92l-7.38-.48a1.05 1.05 0 0 1-.9-.66l-2.76-6.94a1.04 1.04 0 0 0-1.94 0l-2.76 6.94a1.05 1.05 0 0 1-.9.66l-7.38.48c-.96.06-1.34 1.3-.6 1.92l5.65 4.7a1.1 1.1 0 0 1 .36 1.11l-1.7 6.65c-.28 1.12.92 2.04 1.89 1.42l5.86-3.7a1.03 1.03 0 0 1 1.1 0v0Z"
            />
          </svg>
        ))}
      </div>
    </div>
  )
}
