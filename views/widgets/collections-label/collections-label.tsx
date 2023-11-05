import { useMemo } from "react"

import { Label } from "~views/components/label/label"

interface Props {
  type: "row" | "wrap"
  onLabelClick: (value: string) => void
}

export const CollectionsLabel = ({ type, onLabelClick }: Props) => {
  const labelData = useMemo(() => {
    const data = [
      "🥳 Birthday",
      "💍 Wedding",
      "🍼 Baby showers",
      "🛫 Vacation",
      "👍 My hobby"
    ]

    return data.map((item, index) => (
      <Label onLabelClick={onLabelClick} key={index} title={item} />
    ))
  }, [])

  return (
    <div
      className={`extensions-wisher-collections-label extensions-wisher-collections-label--${type}`}>
      {labelData}
    </div>
  )
}
