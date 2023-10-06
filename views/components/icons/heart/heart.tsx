import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const HeartSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    {" "}
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
        d="M19.759 6.036v.001c1.364 1.514 1.203 3.98-.339 5.523L12 18.98l-7.615-7.615s0 0 0 0a3.875 3.875 0 0 1 .151-5.624h.001c1.514-1.364 3.98-1.203 5.523.339l1.233 1.233a1 1 0 0 0 1.414 0l1.428-1.428a3.875 3.875 0 0 1 5.624.151Z"
      />
    </svg>
  </IconWrapper>
)
