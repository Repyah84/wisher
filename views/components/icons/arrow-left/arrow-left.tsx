import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const ArrowLeftSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.76 4.23a.82.82 0 0 1 1.18.03c.31.34.3.88-.03 1.2l-6.4 6.19h16.66c.46 0 .83.38.83.85s-.37.85-.83.85H4.54l6.37 6.18c.33.33.34.87.03 1.2a.82.82 0 0 1-1.18.04L2.49 13.7a1.72 1.72 0 0 1 .01-2.42l7.26-7.05Z"
        clipRule="evenodd"
      />
    </svg>
  </IconWrapper>
)
