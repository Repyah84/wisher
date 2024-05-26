import { useEffect, useState } from "react"

import { Button } from "../button/button"
import { ArrowLeftSvgIcon } from "../icons/arrow-left/arrow-left"
import { ArrowRightSvgIcon } from "../icons/arrow-right/arrow-right"

interface Props {
  image: string
  images: string[]
  onImageChange: (index: number) => void
}

export const Slider = ({ image, images, onImageChange }: Props) => {
  const index = images.findIndex((imageFromList) => imageFromList === image)

  const [imageIndex, setImageIndex] = useState(index === -1 ? 0 : index)

  const isSlider = images.length > 1

  useEffect(() => {
    onImageChange(imageIndex)
  }, [imageIndex])

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
      {isSlider && (
        <Button btnType="icon" onClickFn={onPref}>
          <ArrowLeftSvgIcon width={32} />
        </Button>
      )}

      <img
        style={{
          objectFit: "contain"
        }}
        width={192}
        height={192}
        src={images[imageIndex]}
        alt="Item image"
      />

      {isSlider && (
        <Button btnType="icon" onClickFn={onNext}>
          <ArrowRightSvgIcon width={32} />
        </Button>
      )}

      {isSlider && (
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
      )}
    </div>
  )
}
