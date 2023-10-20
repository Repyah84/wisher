import getSymbolFromCurrency from "currency-symbol-map"

import type { WisherSearchData } from "~store/slices/wisher"
import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"
import { Slider } from "~views/components/slider/slider"

interface Props {
  data: WisherSearchData
  isLoading: boolean
  onSaveClick: () => void
  onEditClick: () => void
}

export const WisherLayout = ({
  data,
  isLoading,
  onSaveClick,
  onEditClick
}: Props) => {
  const {
    input: { title, currency, price },
    images
  } = data

  const priceValue = `${getSymbolFromCurrency(currency)}${price}`

  return (
    <div className="extensions-wisher-layout">
      <Slider images={images} />

      <p className="extensions-wisher-layout__name">{title}</p>

      <span className="extensions-wisher-layout__price">{priceValue}</span>

      <div className="extensions-wisher-layout__action">
        <Button size="md" onClickFn={onEditClick}>
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
