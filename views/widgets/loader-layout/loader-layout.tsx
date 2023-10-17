import type { ReactNode } from "react"

import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"

interface Props {
  children: ReactNode
  cancelFn: () => void
}

export const LoaderLayout = ({ children, cancelFn }: Props) => {
  return (
    <div className="extensions-wisher-loader-layout">
      <p className="extensions-wisher-loader-layout__title">{children}</p>

      <Loader isLoading={true}></Loader>

      <Button btnType="stroke" onClickFn={cancelFn}>
        CANCEL
      </Button>
    </div>
  )
}
