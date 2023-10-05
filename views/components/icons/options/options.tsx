import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const OptionsSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 6">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5.333 3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm7.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        clip-rule="evenodd"
      />
    </svg>
  </IconWrapper>
)
