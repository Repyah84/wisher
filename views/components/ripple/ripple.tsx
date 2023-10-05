import { useRef, useState, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Ripple = ({ children }: Props) => {
  const refRippleWrap = useRef(null)

  const onRippleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation()

    requestAnimationFrame(() => {
      if (refRippleWrap === null) {
        return
      }

      const rect = refRippleWrap.current.getBoundingClientRect()
      const ripple = document.createElement("span")

      const size = Math.max(rect.width, rect.height)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"

      ripple.classList.add("extensions-wisher-ripple")

      refRippleWrap.current.appendChild(ripple)

      ripple.addEventListener("animationend", () => {
        ripple.remove()
      })
    })
  }

  return (
    <div
      ref={refRippleWrap}
      onClick={(e) => onRippleClick(e)}
      className="extensions-wisher-ripple-wrapper">
      {children}
    </div>
  )
}
