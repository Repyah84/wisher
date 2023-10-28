import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClickFn: () => void
}

export const SettingsItem = ({ children, onClickFn }: Props) => {
  return (
    <button onClick={onClickFn} className="extensions-wisher-settings-item">
      {children}
    </button>
  )
}
