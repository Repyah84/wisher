export const PromiseListRun = async <T, R>(
  list: T[],
  fn: (value: T) => Promise<R>
): Promise<void> => {
  for (const item of list) {
    await fn(item)
  }
}
