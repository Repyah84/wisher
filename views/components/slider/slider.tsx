import { useState } from "react"

import { Button } from "../button/button"
import { ArrowLeftSvgIcon } from "../icons/arrow-left/arrow-left"
import { ArrowRightSvgIcon } from "../icons/arrow-right/arrow-right"

interface Props {
  images: string[]
}

export const Slider = ({ images }: Props) => {
  const [imageIndex, setImageIndex] = useState(0)

  const isSlider = images.length > 1

  const onNext = () => {
    setImageIndex((index) => {
      let i = index + 1

      if (i > images.length - 1) {
        i = 0
      }

      return i
    })
  }

  const onPref = () => {
    setImageIndex((index) => {
      let i = index - 1

      if (i < 0) {
        i = images.length - 1
      }

      return i
    })
  }

  return (
    <div className="extensions-wisher-slider">
      {isSlider ? (
        <Button btnType="icon" onClickFn={onPref}>
          <ArrowLeftSvgIcon width={32} />
        </Button>
      ) : (
        <></>
      )}

      <img width={192} height={192} src={images[imageIndex]} alt="Item image" />

      {isSlider ? (
        <Button btnType="icon" onClickFn={onNext}>
          <ArrowRightSvgIcon width={32} />
        </Button>
      ) : (
        <></>
      )}

      {isSlider ? (
        <div className="extensions-wisher-slider__points">
          {images.map((_item, index) => (
            <div
              className={`extensions-wisher-slider__point ${
                index === imageIndex
                  ? "extensions-wisher-slider__point--active"
                  : ""
              } ${
                index === imageIndex - 1 || index === imageIndex + 1
                  ? "extensions-wisher-slider__point--neighbour"
                  : ""
              }`}
              key={index}></div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
