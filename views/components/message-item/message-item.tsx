import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  hasItem: boolean
}

export const MessageItem = ({ children, hasItem }: Props) => {
  return (
    <div
      is-message-item={hasItem.toString()}
      className="extensions-wisher-message-item">
      {children}
    </div>
  )
}
