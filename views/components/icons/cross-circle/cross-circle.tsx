import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const CrossCircleSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity=".87"
        strokeWidth="1.5"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 9l-6 6M15 15 9 9"
      />
    </svg>
  </IconWrapper>
)
