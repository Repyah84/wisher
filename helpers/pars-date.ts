export const ParsDate = (date?: Date | null): string | undefined => {
  if (!date) {
    return
  }

  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
  const day = date.getUTCDate().toString().padStart(2, "0")

  return `${year}-${month}-${day}`
}
