import { useContext } from "react"
import { useDispatch } from "react-redux"

import { resetWisher } from "~store/slices/wisher"
import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Button } from "~views/components/button/button"
import { CrossSvgIcon } from "~views/components/icons/cross/cross"
import { LogoSvgIcon } from "~views/components/icons/logo/logo"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const Header = () => {
  const dispatch = useDispatch()

  const { setWisherState } = useContext(WisherStateContext)

  const updateWisher = () => {
    dispatch(resetWisher())

    setWisherState((wisher) => ({ ...wisher, isShow: false }))
  }

  return (
    <div className="extensions-wisher-header">
      <ButtonNav link="/wisher/wishes/wishes-all">
        <LogoSvgIcon />
      </ButtonNav>

      <Button btnType="icon" onClickFn={updateWisher}>
        <CrossSvgIcon />
      </Button>
    </div>
  )
}
