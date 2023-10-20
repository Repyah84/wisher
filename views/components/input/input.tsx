import { Button } from "../button/button"
import { CrossCircleSvgIcon } from "../icons/cross-circle/cross-circle"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
  onChangeValue: (value: string) => void
  onResetValue?: () => void
}

export const Input = ({
  title,
  value = "",
  type = "text",
  placeholder,
  onChangeValue,
  onResetValue
}: Props) => {
  return (
    <div className="extensions-wisher-input">
      <span className="extensions-wisher-input__title">{title}</span>
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

        {onResetValue !== undefined ? (
          <Button btnType="icon" onClickFn={onResetValue}>
            <CrossCircleSvgIcon />
          </Button>
        ) : (
          <></>
        )}
      </label>
    </div>
  )
}
