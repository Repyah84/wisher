import { WisherSvgIcon } from "../icons/wisher/wisher"

interface Props {
  onClickFn: () => void
}

export const Badge = ({ onClickFn }: Props) => (
  <div onClick={onClickFn} className="extensions-wisher-badge">
    <WisherSvgIcon />
  </div>
)
