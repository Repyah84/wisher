import { Loader } from "../loader/loader"

interface Props {
  loading?: boolean
  title: string
  labelType?: "default" | "active" | "primary"
  onLabelClick?: (value: string) => void
}

export const Label = ({
  title,
  labelType = "default",
  onLabelClick,
  loading = false
}: Props) => {
  return (
    <div
      onClick={() => onLabelClick(title)}
      className={`extensions-wisher-label extensions-wisher-label--${labelType}`}>
      <div className="extensions-wisher-label__loader">
        <Loader size={4} isLoading={loading} />
      </div>

      <span
        is-hide={loading.toString()}
        className="extensions-wisher-label__title">
        {title}
      </span>
    </div>
  )
}
