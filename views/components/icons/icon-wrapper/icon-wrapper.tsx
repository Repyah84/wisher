import type { ReactNode } from "react"

interface Props {
  width: number
  children: ReactNode
}

export const IconWrapper = ({ width, children }: Props) => (
  <div
    style={{
      display: "inline-block",
      maxWidth: `${width}px`
    }}>
    {children}
  </div>
)
