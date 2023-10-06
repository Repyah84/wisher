import { Button } from "../button/button"
import { CrossSvgIcon } from "../icons/cross/cross"
import { LogoSvgIcon } from "../icons/logo/logo"

interface Props {
  onClickFn: () => void
}

export const Header = ({ onClickFn }: Props) => (
  <div className="extensions-wisher-header">
    <LogoSvgIcon />

    <Button btnType="icon" onClickFn={onClickFn}>
      <CrossSvgIcon />
    </Button>
  </div>
)
