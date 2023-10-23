import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const ShareSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m21.79 8.97-5.72-5.76a.68.68 0 0 0-.5-.21c-.2 0-.36.07-.5.21a.7.7 0 0 0-.21.51V6.6h-2.5c-5.3 0-8.56 1.51-9.77 4.53-.4 1-.59 2.26-.59 3.75 0 1.25.47 2.94 1.42 5.07a26.16 26.16 0 0 0 .27.61c.04.1.09.18.14.25.09.13.2.19.31.19.11 0 .2-.04.27-.11.06-.08.09-.17.09-.28 0-.07 0-.17-.03-.3a9.65 9.65 0 0 1 .11-3.68c.13-.6.31-1.13.54-1.56.24-.44.53-.82.9-1.14a5.24 5.24 0 0 1 2.66-1.26c.57-.12 1.14-.2 1.72-.24.58-.05 1.23-.07 1.96-.07h2.5v2.88c0 .2.07.36.2.5.15.15.32.22.51.22.2 0 .36-.07.5-.21l5.72-5.76a.7.7 0 0 0 .21-.51.7.7 0 0 0-.21-.5Z"
        clipRule="evenodd"
      />
    </svg>
  </IconWrapper>
)
