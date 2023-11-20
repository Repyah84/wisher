export const FormDataClear = (locale: string, inputDate: Date) => {
  const date = new Date(inputDate)

  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "short",
    day: "numeric"
  }

  return date.toLocaleString(locale, options)
}
