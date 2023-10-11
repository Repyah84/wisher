import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"

interface Props {
  children: ReactNode
}

export const HeaderNav = ({ children }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="extensions-wisher-header-nav">
      <Button btnType="icon" onClickFn={() => navigate("/wisher/details")}>
        <ArrowLeftSvgIcon />
      </Button>
      {children}
    </div>
  )
}
