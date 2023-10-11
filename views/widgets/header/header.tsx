import { useContext } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { Button } from "../../components/button/button"
import { CrossSvgIcon } from "../../components/icons/cross/cross"
import { LogoSvgIcon } from "../../components/icons/logo/logo"

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
