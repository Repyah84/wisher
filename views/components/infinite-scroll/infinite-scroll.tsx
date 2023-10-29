import { useEffect, useRef, type ReactNode } from "react"

import { useInteractionObserver } from "~views/hooks/intersection-observer"

import { Loader } from "../loader/loader"

interface Props {
  children: ReactNode
  observerEventFn: () => void
  loading?: boolean
  repeatWhen?: { value: boolean }
  height?: string
}

export const InfiniteScroll = ({
  children,
  observerEventFn,
  loading = false,
  repeatWhen,
  height = "auto"
}: Props) => {
  const ref = useRef(null)
  const rootRef = useRef(null)

  const entry = useInteractionObserver(ref, rootRef, {
    rootMargin: "0px 0px 400px 0px",
    threshold: 0
  })

  useEffect(() => {
    if (entry || (entry && repeatWhen.value)) {
      observerEventFn()
    }
  }, [entry, repeatWhen])

  return (
    <div
      style={{
        height: height
      }}
      ref={rootRef}
      className="extension-extension-infinite-scroll">
      <div className="extension-extension-infinite-scroll__content">
        {children}

        <div className="extension-extension-infinite-scroll__loader">
          <Loader size={6} isLoading={loading} />
        </div>
      </div>

      <div
        ref={ref}
        className="extension-extension-infinite-scroll__observer"></div>
    </div>
  )
}
