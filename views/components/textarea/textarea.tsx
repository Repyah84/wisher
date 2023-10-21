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
  return (
    <div className="extensions-wisher-textarea">
      <span className="extensions-wisher-textarea__title">{title}</span>

      <textarea
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="extensions-wisher-textarea__textarea"
        placeholder={placeholder}
        rows={rows}></textarea>
    </div>
  )
}
