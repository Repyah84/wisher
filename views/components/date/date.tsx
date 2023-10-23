import getUserLocale from "get-user-locale"

import { formatDate } from "~helpers/date-pars"

interface Props {
  date: Date
}

export const WishDate = ({ date }: Props) => {
  return <span>{formatDate(getUserLocale(), date)}</span>
}
