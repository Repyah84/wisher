import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useContext, useEffect, useMemo } from "react"

import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useMount } from "~views/hooks/mount"

import { Button } from "../button/button"

export const Snackbar = () => {
  let timer: ReturnType<typeof setTimeout> | null = null

  const {
    wisherSate: { snackbar },
    setWisherState
  } = useContext(WisherStateContext)

  const isShow = useMemo(() => {
    return snackbar !== null
  }, [snackbar])

  const { state, animationEnd } = useMount(isShow)

  const onBtnClick = () => {
    setWisherState((wisher) => ({ ...wisher, isShow: true, snackbar: null }))
  }

  useEffect(() => {
    if (!isShow) {
      return
    }

    timer = setTimeout(() => {
      setWisherState((wisher) => ({ ...wisher, snackbar: null }))
    }, 3000)

    return () => {
      clearTimeout(timer)

      timer = null
    }
  }, [isShow])

  return (
    state && (
      <div
        onAnimationEnd={animationEnd}
        is-show={isShow.toString()}
        className="extensions-wisher-snackbar">
        <img width={64} height={64} src={svgIcon} alt="cat" />

        <div className="extensions-wisher-snackbar__content">
          {snackbar?.title && (
            <p className="extensions-wisher-snackbar__description">
              {snackbar.title}
            </p>
          )}

          {snackbar?.action && (
            <Button
              onClickFn={onBtnClick}
              btnType="stroke"
              size="md"
              btnColor="primary">
              <span className="extensions-wisher-snackbar__btn-title">
                VIEW WISHLIST
              </span>
            </Button>
          )}
        </div>
      </div>
    )
  )
}
