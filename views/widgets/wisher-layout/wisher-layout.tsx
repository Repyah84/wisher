import getSymbolFromCurrency from "currency-symbol-map"

import type { ParserUrl } from "~api/parser-url/parser-url.service"
import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"
import { Slider } from "~views/components/slider/slider"

interface Props {
  data: ParserUrl
  isLoading: boolean
  onSaveClick: () => void
}

export const WisherLayout = ({ data, isLoading, onSaveClick }: Props) => {
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

        <Button btnColor="primary" size="md" onClickFn={onSaveClick}>
          <div className="extensions-wisher-layout__save-btn-content">
            <span>SAVE</span>

            <Loader size={5.5} isLoading={isLoading} />
          </div>
        </Button>
      </div>
    </div>
  )
}
