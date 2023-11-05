export const CompareDate = (dateInSeconds: number): boolean => {
  const date = Math.floor(Date.now() / 1000)

  return date >= dateInSeconds
}
