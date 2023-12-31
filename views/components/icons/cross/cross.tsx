import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const CrossSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    {" "}
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
        clipRule="evenodd"
      />
    </svg>
  </IconWrapper>
)
