import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const HeartSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.76 6.04h0c1.36 1.51 1.2 3.98-.34 5.52L12 18.98l-7.62-7.61s0 0 0 0a3.87 3.87 0 0 1 .16-5.63h0c1.51-1.36 3.98-1.2 5.52.34l1.23 1.23a1 1 0 0 0 1.42 0l1.42-1.43a3.87 3.87 0 0 1 5.63.16Z"
      />
    </svg>
  </IconWrapper>
)
