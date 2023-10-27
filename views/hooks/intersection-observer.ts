import { useEffect, useState } from "react"

export const useInteractionObserver = (
  ref: React.MutableRefObject<any>,
  root: React.MutableRefObject<any>,
  { rootMargin, threshold }: IntersectionObserverInit
) => {
  const [entry, setEntry] = useState(false)

  const handleIntersect: IntersectionObserverCallback = (
    entries,
    _observer
  ) => {
    entries.forEach((entry) => {
      setEntry(entry.isIntersecting)
    })
  }

  useEffect(() => {
    if (ref === null || root === null) {
      return
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: root.current,
      rootMargin,
      threshold
    })

    observer.observe(ref.current)

    return () => {
      if (!observer) {
        return
      }

      observer.disconnect()
    }
  }, [ref, root])

  return entry
}
