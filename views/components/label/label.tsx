interface Props {
  title: string
  labelType?: "default" | "active" | "primary"
}

export const Label = ({ title, labelType = "default" }: Props) => {
  return (
    <div
      className={`extensions-wisher-label extensions-wisher-label--${labelType}`}>
      <span>{title}</span>
    </div>
  )
}
