import { useEffect, useState } from "react"

interface Props {
  host: React.MutableRefObject<any>
}

interface Ripple {
  id: number
  x: number
  y: number
  width: number
  height: number
}

export const Ripple = ({ host }: Props) => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    requestAnimationFrame(() => {
      if (host.current === null) {
        return
      }

      const rect = host.current.getBoundingClientRect()

      const size = Math.max(rect.width, rect.height)

      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2
      const width = size
      const height = size

      const id = Date.now()

      const newRipple: Ripple = { id, x, y, width, height }

      setRipples((ripples) => [...ripples, newRipple])
    })
  }

  // const rippleAnimationAnd = (rippleId: number) => {
  //   setRipples((ripples) => ripples.filter(({ id }) => id !== rippleId))
  // }

  useEffect(() => {
    if (host.current === null) {
      return
    }

    host.current.addEventListener("click", handleEvent)

    return () => {
      if (host.current === null) {
        return
      }

      host.current.removeEventListener("click", handleEvent)
    }
  }, [host])

  // onAnimationEnd={() => rippleAnimationAnd(ripple.id)}
  return ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="extensions-wisher-ripple"
      style={{
        left: `${ripple.x}px`,
        top: `${ripple.y}px`,
        width: `${ripple.width}px`,
        height: `${ripple.height}px`
      }}></span>
  ))
}
