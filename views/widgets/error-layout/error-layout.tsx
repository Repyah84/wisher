import { Button } from "~views/components/button/button"
import { ReloadSvgIcon } from "~views/components/icons/reload/reload"

interface Props {
  retryFn: () => void
}

export const ErrorLayout = ({ retryFn }: Props) => {
  return (
    <div className="extensions-wisher-error-layout">
      <p className="extensions-wisher-error-layout__title">
        Ops, something went wrong. Please try again
      </p>

      <Button btnType="stroke" btnColor="primary" onClickFn={retryFn}>
        <ReloadSvgIcon />
        <span>RETRY</span>
      </Button>
    </div>
  )
}
