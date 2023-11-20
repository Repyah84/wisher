import getUserLocale from "get-user-locale"
import type { ReactNode } from "react"

import { FormatDate } from "~helpers/date-pars"
import { FormDataClear } from "~helpers/date-pars-clear"

interface Props {
  date: Date
  clear?: boolean
  children?: ReactNode
}

export const WishDate = ({ date, clear = false, children }: Props) => {
  return (
    <span>
      {children}
      {clear
        ? FormDataClear(getUserLocale(), date)
        : FormatDate(getUserLocale(), date)}
    </span>
  )
}
