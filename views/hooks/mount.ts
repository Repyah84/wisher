import { useEffect, useState } from "react"

export const useMount = (isIt: boolean) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    if (!isIt) {
      return
    }

    setState(true)
  }, [isIt])

  const animationEnd = () => {
    if (isIt) {
      return
    }

    setState(false)
  }

  return { state, setState, animationEnd }
}
