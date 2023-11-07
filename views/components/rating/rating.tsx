import { useMemo, useState, type ReactNode } from "react"

import { StarIcon } from "../star/star"

interface Props {
  rating: number
  count?: number
  children?: ReactNode
  size?: number
  onRatingChange?: (rating: number) => void
}

export const WisherRating = ({
  rating,
  count = 3,
  size = 32,
  children,
  onRatingChange
}: Props) => {
  const initialFillState = () => {
    const offsetList = []

    const limit = count * 2
    const data = Array(rating * 2).fill(1)

    for (let i = 0; i < limit; i += 2) {
      offsetList.push([data[i] ?? 0, data[i + 1] ?? 0])
    }

    return offsetList
  }

  const setOffsetData = (
    index: number,
    value: [number, number]
  ): [number, number][] => {
    const data: [number, number][] = offSetFillSelected.map(
      (_item, itemIndex) => {
        if (itemIndex < index) {
          return [1, 1]
        }

        if (itemIndex === index) {
          return value
        }

        return [0, 0]
      }
    )

    return data
  }

  const getRating = (value: [number, number][] | [number, number]): number => {
    let rating = 0

    const getSum = (value: [number, number][] | [number, number]) => {
      for (let item of value) {
        if (Array.isArray(item)) {
          getSum(item)
        } else {
          rating += item
        }
      }
    }

    getSum(value)

    return rating * 0.5
  }

  const [offSetFillSelected, setOffSetFillSelected] = useState<
    [number, number][]
  >(initialFillState())

  const [offSetFill, setOffsetFill] = useState<[number, number][] | null>(null)

  const fillData = useMemo(() => {
    return offSetFill || offSetFillSelected
  }, [offSetFill, offSetFillSelected])

  const onPointerEnter = (index: number, value: [number, number]) => {
    setOffsetFill(setOffsetData(index, value))
  }

  const onPointerLeave = () => {
    setOffsetFill(null)
  }

  const onPointerClick = (index: number, value: [number, number]) => {
    const data = setOffsetData(index, value)

    setOffSetFillSelected(data)

    onRatingChange(getRating(data))
  }

  return (
    <div className="extensions-wisher-rating">
      {children}
      <div className="extensions-wisher-rating__items">
        {fillData.map((item, index) => (
          <StarIcon
            readonly={onRatingChange === undefined}
            index={index}
            key={index}
            data={item}
            size={size}
            onPointerEnter={onPointerEnter}
            onPointerClick={onPointerClick}
            onPointerLeave={onPointerLeave}
          />
        ))}
      </div>
    </div>
  )
}
