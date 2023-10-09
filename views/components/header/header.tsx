import { useContext } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { Button } from "../button/button"
import { CrossSvgIcon } from "../icons/cross/cross"
import { LogoSvgIcon } from "../icons/logo/logo"

export const Header = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const updateWisher = () => {
    setWisherState((wisher) => ({ ...wisher, isShow: false }))
  }

  return (
    <div className="extensions-wisher-header">
      <LogoSvgIcon />

      <Button btnType="icon" onClickFn={updateWisher}>
        <CrossSvgIcon />
      </Button>
    </div>
  )
}
