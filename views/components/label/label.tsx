import { Loader } from "../loader/loader"

export type LabelType = "default" | "active" | "primary"

interface Props {
  loading?: boolean
  title: string
  labelType?: LabelType
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
      onClick={() => (onLabelClick ? onLabelClick(title) : undefined)}
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
