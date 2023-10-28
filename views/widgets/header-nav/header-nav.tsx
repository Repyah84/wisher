import { type ReactNode } from "react"

import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

interface Props {
  children: ReactNode
}

export const HeaderNav = ({ children }: Props) => {
  const { navigateWithRedirect } = useNavigateWithRedirect()

  return (
    <div className="extensions-wisher-header-nav">
      <Button
        btnType="icon"
        onClickFn={() => navigateWithRedirect("/wisher/details")}>
        <ArrowLeftSvgIcon />
      </Button>
      {children}
    </div>
  )
}
