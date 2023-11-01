import getUserLocale from "get-user-locale"

import { FormatDate } from "~helpers/date-pars"

interface Props {
  date: Date
}

export const WishDate = ({ date }: Props) => {
  return <span>{FormatDate(getUserLocale(), date)}</span>
}
