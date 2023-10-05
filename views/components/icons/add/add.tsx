import type { IconProps } from "../icon-props.type"
import { IconWrapper } from "../icon-wrapper/icon-wrapper"

export const AddSvgIcon = ({ width = 24 }: IconProps) => (
  <IconWrapper width={width}>
    <svg
      className="__extensions-wisher-svg__"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 20">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4.238 0h12.857a3.576 3.576 0 0 1 3.572 3.571V16.43A3.576 3.576 0 0 1 17.095 20H4.238a3.576 3.576 0 0 1-3.571-3.571V3.57A3.576 3.576 0 0 1 4.238 0Zm7.143 10.714h2.857a.714.714 0 0 0 0-1.428h-2.857V6.429a.714.714 0 1 0-1.429 0v2.857H7.095a.714.714 0 1 0 0 1.428h2.857v2.857a.714.714 0 1 0 1.429 0v-2.857Z"
        clip-rule="evenodd"
      />
    </svg>
  </IconWrapper>
)
