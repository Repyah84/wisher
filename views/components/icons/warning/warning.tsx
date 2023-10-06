import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const WarningSvgIcon = ({ width = 16 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.4 12.6c-.57-.58-.19-1.79-.48-2.5C2.62 9.38 1.5 8.79 1.5 8s1.11-1.37 1.42-2.1c.29-.71-.1-1.92.48-2.5.58-.57 1.79-.19 2.5-.48.73-.3 1.32-1.42 2.1-1.42s1.37 1.11 2.1 1.42c.71.29 1.92-.1 2.5.48.57.58.19 1.79.48 2.5.3.73 1.42 1.32 1.42 2.1s-1.11 1.37-1.42 2.1c-.29.71.1 1.92-.48 2.5-.58.57-1.79.19-2.5.48-.73.3-1.32 1.42-2.1 1.42s-1.37-1.11-2.1-1.42c-.71-.29-1.92.1-2.5-.48ZM8 5v3.5"
      />
      <path
        fill="currentColor"
        d="M8 11.38a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"
      />
    </svg>
  </IconWrapper>
)
