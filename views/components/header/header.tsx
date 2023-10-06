import { useAppDispatch } from "~store/store"
import { toggleWisherSate } from "~store/wisher-state"

import { Button } from "../button/button"
import { CrossSvgIcon } from "../icons/cross/cross"
import { LogoSvgIcon } from "../icons/logo/logo"

export const Header = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="extensions-wisher-header">
      <LogoSvgIcon />

      <Button
        btnType="icon"
        onClickFn={() => dispatch(toggleWisherSate(false))}>
        <CrossSvgIcon />
      </Button>
    </div>
  )
}
