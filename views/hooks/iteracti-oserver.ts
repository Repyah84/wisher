import { useEffect, useState } from "react"

export const useInteractObserver = (
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
      if (ref.current === null) {
        return
      }

      observer.unobserve(ref.current)
    }
  }, [ref, root])

  return entry
}
