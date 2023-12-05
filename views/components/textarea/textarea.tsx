import { useEffect, useRef } from "react"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string
  value: string
  onValueChange: (value: string) => void
}

export const Textarea = ({
  title,
  value,
  rows = 3,
  placeholder,
  onValueChange
}: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    setHeight()
  }, [])

  const valueChange = (value: string) => {
    setHeight()

    onValueChange(value)
  }

  const setHeight = () => {
    if (ref === null) {
      return
    }

    requestAnimationFrame(() => {
      ref.current.style.height = "auto"
      ref.current.style.height = `${ref.current.scrollHeight}px`
    })
  }

  return (
    <div className="extensions-wisher-textarea">
      <span className="extensions-wisher-textarea__title">{title}</span>

      <textarea
        ref={ref}
        value={value}
        onChange={(e) => valueChange(e.target.value)}
        className="extensions-wisher-textarea__textarea"
        placeholder={placeholder}
        rows={rows}></textarea>
    </div>
  )
}
