import { Button } from "../button/button"
import { CrossSvgIcon } from "../icons/cross/cross"

interface Props {
  value?: string
  onChangeValue: (value: string) => void
  onResetValue: () => void
}

export const Input = ({ value = "", onChangeValue, onResetValue }: Props) => {
  return (
    <label className="extensions-wisher-input">
      <input
        onChange={(e) => {
          onChangeValue(e.target.value)
        }}
        value={value}
        className="extensions-wisher-input__content"
        type="text"
      />

      <Button btnType="icon" onClickFn={onResetValue}>
        <CrossSvgIcon />
      </Button>
    </label>
  )
}
