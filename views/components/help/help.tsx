import svgIcon from "data-base64:~assets/poll.svg"
import type { ReactNode } from "react"

import { Button } from "../button/button"
import { CrossSvgIcon } from "../icons/cross/cross"

interface Props {
  hasBtnClose: boolean
  children: ReactNode
}

export const Help = ({ hasBtnClose, children }: Props) => {
  return (
    <div
      is-btn-close={hasBtnClose.toString()}
      className="extensions-wisher-help">
      {hasBtnClose ? (
        <div className="extensions-wisher-help__btn-close">
          <Button btnType="icon" onClickFn={() => console.log()}>
            <CrossSvgIcon />
          </Button>
        </div>
      ) : (
        <></>
      )}

      <img
        className="extensions-wisher-help__icon"
        width={24}
        height={24}
        src={svgIcon}
        alt="Poll"
      />

      {children}
    </div>
  )
}
