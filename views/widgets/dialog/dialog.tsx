import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"

interface Props {
  loading: boolean
  onAcceptClick: () => void
  onCancelClick: () => void
}

export const Dialog = ({ loading, onAcceptClick, onCancelClick }: Props) => {
  return (
    <div className="extensions-wisher-dialog">
      <h3 className="extensions-wisher-dialog__title">
        Delete the collection ?
      </h3>

      <p className="extensions-wisher-dialog__description">
        You won’t be able to restore the collection
      </p>

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
