import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const ArrowLeftSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27 16H5M14 7l-9 9 9 9"
      />
    </svg>
  </IconWrapper>
)
