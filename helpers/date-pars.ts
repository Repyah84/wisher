export const formatDate = (locale: string, inputDate: Date): string => {
  const date = new Date(inputDate)

  const currentDate = new Date()

  const yesterday = new Date(currentDate)

  yesterday.setDate(yesterday.getDate() - 1)

  if (date.toDateString() === currentDate.toDateString()) {
    return "Today"
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday"
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "short",
    day: "numeric"
  }

  return date.toLocaleString(locale, options)
}
