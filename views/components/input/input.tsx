import { useEffect, useRef, type ReactNode } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  onChangeValue: (value: string) => void
  errorMessage?: string
  children?: ReactNode
  lazyAutofocus?: number
}

export const Input = ({
  title,
  value = "",
  type = "text",
  placeholder,
  onChangeValue,
  errorMessage,
  children,
  lazyAutofocus
}: Props) => {
  let timer: ReturnType<typeof setTimeout> | null = null

  const ref = useRef(null)

  /**
   * autoFocus is breaks animation have implemented lazy input focus
   */
  useEffect(() => {
    if (lazyAutofocus && ref !== null) {
      setTimeout(() => {
        ref.current.focus()
      }, lazyAutofocus)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <div className="extensions-wisher-input">
      {title && (
        <div className="extensions-wisher-input__header">
          <span className="extensions-wisher-input__title">{title}</span>

          {errorMessage && (
            <span className="extensions-wisher-input__error">
              {errorMessage}
            </span>
          )}
        </div>
      )}

      <label className="extensions-wisher-input__label">
        <input
          ref={ref}
          onChange={(e) => {
            onChangeValue(e.target.value)
          }}
          value={value}
          className="extensions-wisher-input__content"
          type={type}
          placeholder={placeholder}
        />

        {children && (
          <div className="extensions-wisher-input__children">{children}</div>
        )}
      </label>
    </div>
  )
}
