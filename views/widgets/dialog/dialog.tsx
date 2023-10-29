import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"

interface Props {
  title: string
  description: string
  loading: boolean
  onAcceptClick: () => void
  onCancelClick: () => void
}

export const Dialog = ({
  title,
  description,
  loading,
  onAcceptClick,
  onCancelClick
}: Props) => {
  return (
    <div className="extensions-wisher-dialog">
      <h3 className="extensions-wisher-dialog__title">{title}</h3>

      <p className="extensions-wisher-dialog__description">{description}</p>

      <div className="extensions-wisher-dialog__action">
        <Button size="md" btnColor="default" onClickFn={onCancelClick}>
          <span>CANCEL</span>
        </Button>

        <Button size="md" btnColor="warn" onClickFn={onAcceptClick}>
          <div className="extensions-wisher-dialog__btn-content">
            <Loader size={5.5} isLoading={loading} />

            <span is-hide={loading.toString()}>DELETE</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
