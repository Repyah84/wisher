import { useEffect, useRef, type ReactNode } from "react"

import { useInteractObserver } from "~views/hooks/iteracti-oserver"

import { Loader } from "../loader/loader"

interface Props {
  children: ReactNode
  loading: boolean
  observerEventFn: () => void
}

export const InteractObserver = ({
  children,
  loading,
  observerEventFn
}: Props) => {
  const ref = useRef(null)
  const rootRef = useRef(null)

  const entry = useInteractObserver(ref, rootRef, {
    rootMargin: "0px 0px 400px 0px",
    threshold: 1
  })

  useEffect(() => {
    if (!entry) {
      return
    }

    observerEventFn()
  }, [entry])

  return (
    <div ref={rootRef} className="extension-extension-interact-observer">
      <div className="extension-extension-interact-observer__content">
        {children}

        <div className="extension-extension-interact-observer__loader">
          <Loader size={6} isLoading={loading} />
        </div>
      </div>

      <div
        ref={ref}
        className="extension-extension-interact-observer__observer"></div>
    </div>
  )
}
