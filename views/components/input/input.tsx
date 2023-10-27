import { Button } from "../button/button"
import { CrossCircleSvgIcon } from "../icons/cross-circle/cross-circle"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
  onChangeValue: (value: string) => void
  onResetValue?: () => void
  errorMessage?: string
}

export const Input = ({
  title,
  value = "",
  type = "text",
  placeholder,
  onChangeValue,
  onResetValue,
  errorMessage
}: Props) => {
  return (
    <div className="extensions-wisher-input">
      <div className="extensions-wisher-input__header">
        <span className="extensions-wisher-input__title">{title}</span>

        {errorMessage && (
          <span className="extensions-wisher-input__error">{errorMessage}</span>
        )}
      </div>

      <label className="extensions-wisher-input__label">
        <input
          onChange={(e) => {
            onChangeValue(e.target.value)
          }}
          value={value}
          className="extensions-wisher-input__content"
          type={type}
          placeholder={placeholder}
        />

        {onResetValue && (
          <Button btnType="icon" onClickFn={onResetValue}>
            <CrossCircleSvgIcon />
          </Button>
        )}
      </label>
    </div>
  )
}
