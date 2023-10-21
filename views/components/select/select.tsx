import checkSvhIcon from "data-base64:~assets/check.svg"
import arrowSvgIcon from "data-base64:~assets/short-arrow-down.svg"
import { useEffect, useState } from "react"

import { useCurrenciesGraphQL } from "~gql/hooks/currencies"
import { useMount } from "~views/hooks/mount"

import { Loader } from "../loader/loader"

interface Props {
  title: string
  selected: string
  onSelected: (value: string) => void
}

export const Select = ({ title, selected, onSelected }: Props) => {
  const { data, isSuccess } = useCurrenciesGraphQL()

  const [open, setOpen] = useState(false)

  const { state, animationEnd } = useMount(open)

  const [selectedOption, setSelectedOption] = useState(selected)

  const handleBodyClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    window.document.addEventListener("click", handleBodyClick)

    return () => {
      window.document.removeEventListener("click", handleBodyClick)
    }
  }, [])

  const onSelectClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isSuccess) {
      return
    }

    e.stopPropagation()

    setOpen(!open)
  }

  const onOptionClick = (value: string) => {
    setSelectedOption(value)

    onSelected(value)
  }

  return (
    <div className="extensions-wisher-select">
      <span className="extensions-wisher-select__title">{title}</span>

      <button
        type="button"
        onClick={(e) => onSelectClick(e)}
        className="extensions-wisher-select__btn">
        <span>{selectedOption}</span>

        {isSuccess ? (
          <img src={arrowSvgIcon} width={24} height={24} alt="arrow" />
        ) : (
          <Loader size={5.5} isLoading={true} />
        )}

        {state ? (
          <div
            is-open={open.toString()}
            onAnimationEnd={animationEnd}
            className="extensions-wisher-select__options">
            {data.currencies.map((option) => (
              <div
                onClick={() => onOptionClick(option.code)}
                key={option.code}
                className="extensions-wisher-select__option">
                <span>{option.code}</span>

                {option.code === selectedOption ? (
                  <img width={24} height={24} src={checkSvhIcon} alt="check" />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </button>
    </div>
  )
}
