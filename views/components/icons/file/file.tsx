import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const FileSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.75 5.57h-7.5c-.4 0-.77-.2-1-.51l-.75-1.03A2.49 2.49 0 0 0 9.5 3H3.25C2.56 3 2 3.58 2 4.29V19.7c0 .71.56 1.29 1.25 1.29h17.5c.69 0 1.25-.58 1.25-1.29V6.86c0-.71-.56-1.29-1.25-1.29ZM17 13a1 1 0 0 1-1 1h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V9a1 1 0 1 1 2 0v3h3a1 1 0 0 1 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  </IconWrapper>
)
