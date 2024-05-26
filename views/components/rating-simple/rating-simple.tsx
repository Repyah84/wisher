import { useState } from "react"

interface Props {
  rating: number
  size?: number
  onRatingChange?: (rating: number) => void
}

export const RatingSimple = ({ rating, size = 32, onRatingChange }: Props) => {
  const count = [1, 2, 3, 4, 5]

  const [rat, setRat] = useState(rating || 0)

  const [hoverRat, setHoverRat] = useState(0)

  const isSelect = (item: number, rat: number): boolean =>
    hoverRat ? hoverRat >= item : rat >= item

  const onChange = (index: number) => {
    if (onRatingChange === undefined) {
      return
    }

    const r = rat === 1 && index === 1 ? 0 : index

    setRat(r)

    onRatingChange(r)
  }

  const onMouseEnter = (index: number) => {
    if (onRatingChange === undefined) {
      return
    }

    setHoverRat(index)
  }

  const onMouseLeave = () => {
    if (onRatingChange === undefined) {
      return
    }

    setHoverRat(0)
  }

  return (
    <div className="extension-rating-simple">
      {count.map((item, index) => (
        <div
          key={index}
          style={{
            maxWidth: `${size}px`,
            minWidth: `${size}px`
          }}
          onClick={() => onChange(item)}
          onMouseEnter={() => onMouseEnter(item)}
          onMouseLeave={onMouseLeave}
          attr-readonly={(onRatingChange === undefined).toString()}
          className="extension-rating-simple__element">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.002 27C16.002 27 3.50195 20 3.50195 11.5C3.50221 9.99766 4.02277 8.54179 4.97513 7.37989C5.9275 6.21799 7.25288 5.4218 8.72594 5.12667C10.199 4.83154 11.7288 5.0557 13.0553 5.76104C14.3817 6.46637 15.423 7.60934 16.002 8.99562L16.0019 8.99563C16.5809 7.60935 17.6222 6.46638 18.9486 5.76104C20.2751 5.05571 21.8049 4.83155 23.278 5.12667C24.751 5.4218 26.0764 6.21799 27.0288 7.37989C27.9811 8.54178 28.5017 9.99766 28.502 11.5C28.502 20 16.002 27 16.002 27Z"
              fill={
                isSelect(item, rat)
                  ? "var(--extensions-wisher-primary)"
                  : "transparent"
              }
              stroke="var(--extensions-wisher-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
