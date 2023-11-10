import type { ReactNode } from "react"

import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"

interface Props {
  children: ReactNode
  cancelFn: () => void
  hideFn: () => void
}

export const LoaderLayout = ({ children, cancelFn, hideFn }: Props) => {
  return (
    <div className="extensions-wisher-loader-layout">
      <p className="extensions-wisher-loader-layout__title">{children}</p>

      <Loader isLoading={true}></Loader>

      <Button btnType="stroke" btnColor="primary" onClickFn={cancelFn}>
        <span className="extensions-wisher-loader-layout__btn-content">
          CANCEL
        </span>
      </Button>

      <Button btnType="stroke" btnColor="primary" onClickFn={hideFn}>
        <span className="extensions-wisher-loader-layout__btn-content">
          HIDE DIALOG
        </span>
      </Button>
    </div>
  )
}
