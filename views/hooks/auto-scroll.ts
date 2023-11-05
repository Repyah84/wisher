import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useAutoScroll = (ref: React.MutableRefObject<any>) => {
  const { hash } = useLocation()

  useEffect(() => {
    if (ref === null || hash !== "#notes") {
      return
    }

    ref.current.scrollIntoView(false)
  }, [location])
}
