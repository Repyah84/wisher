import { useMemo } from "react"

interface Props {
  index: number
  size: number
  data: [number, number]
  onPointerEnter: (index: number, value: [number, number]) => void
  onPointerClick: (index: number, value: [number, number]) => void
  onPointerLeave: () => void
  readonly?: boolean
}

export const StarIcon = ({
  size,
  data,
  index,
  onPointerClick,
  onPointerEnter,
  onPointerLeave,
  readonly = false
}: Props) => {
  const getData = (offset: number) => {
    const data: [number, number] = offset === 1 ? [1, 0] : [1, 1]

    return data
  }

  const onEnter = (offset: number) => {
    if (readonly) {
      return
    }

    onPointerEnter(index, getData(offset))
  }

  const onLeave = () => {
    if (readonly) {
      return
    }
    onPointerLeave()
  }

  const onClick = (offset: number) => {
    if (readonly) {
      return
    }
    onPointerClick(index, getData(offset))
  }

  const id = useMemo(() => {
    return Math.random() + 100
  }, [])

  const getFillSize = () => {
    let value = 0

    data.forEach((item, index) => {
      if (item) {
        value = 50 * (index + 1)
      }
    })

    return value
  }

  return (
    <div className="extensions-wisher-star">
      <svg
        style={{
          maxWidth: `${size}px`,
          minWidth: `${size}px`,
          width: "100%"
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <defs>
          <linearGradient id={`myGradient${id}`}>
            <stop offset={`${getFillSize()}%`} stopColor="#000" />
            <stop offset="0%" stopColor="#fff" />
          </linearGradient>
        </defs>

        <path
          fill={`url(#myGradient${id})`}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m16.55 23.84 6.3 4c.81.5 1.81-.25 1.57-1.2l-1.82-7.16a1.1 1.1 0 0 1 .36-1.1l5.65-4.71c.74-.62.36-1.86-.6-1.92l-7.38-.48a1.05 1.05 0 0 1-.9-.66l-2.76-6.94a1.04 1.04 0 0 0-1.94 0l-2.76 6.94a1.05 1.05 0 0 1-.9.66l-7.38.48c-.96.06-1.34 1.3-.6 1.92l5.65 4.7a1.1 1.1 0 0 1 .36 1.11l-1.7 6.65c-.28 1.12.92 2.04 1.89 1.42l5.86-3.7a1.03 1.03 0 0 1 1.1 0v0Z"
        />
      </svg>

      <div
        className="extensions-wisher-star__left"
        onMouseEnter={() => onEnter(1)}
        onMouseLeave={() => onLeave()}
        onClick={() => onClick(1)}></div>

      <div
        className="extensions-wisher-star__right"
        onMouseEnter={() => onEnter(2)}
        onMouseLeave={() => onLeave()}
        onClick={() => onClick(2)}></div>
    </div>
  )
}
