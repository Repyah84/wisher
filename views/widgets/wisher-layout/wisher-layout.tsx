import getSymbolFromCurrency from "currency-symbol-map"

import type { ParserUrl } from "~api/parser-url/parser-url.type"
import { Button } from "~views/components/button/button"
import { Slider } from "~views/components/slider/slider"

interface Props {
  data: ParserUrl
}

export const WisherLayout = ({ data }: Props) => {
  console.log(data)

  const { name, image, price, priceCurrency } = data

  const priceValue = `${getSymbolFromCurrency(priceCurrency)}${price}`

  return (
    <div className="extensions-wisher-layout">
      <Slider images={image} />

      <p className="extensions-wisher-layout__name">{name}</p>

      <span className="extensions-wisher-layout__price">{priceValue}</span>

      <div className="extensions-wisher-layout__action">
        <Button size="md" onClickFn={() => console.log("click")}>
          EDIT
        </Button>

        <Button
          btnColor="primary"
          size="md"
          onClickFn={() => console.log("click")}>
          SAVE
        </Button>
      </div>
    </div>
  )
}
