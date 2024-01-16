import { useContext, useEffect, useMemo, useState } from "react"

import { Button } from "~views/components/button/button"
import { CrossCircleSvgIcon } from "~views/components/icons/cross-circle/cross-circle"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

interface Props {
  btnTitle: string
  loading?: boolean
  collections: string[]
  defCollectionName?: string
  onSubmitFn: (e: string) => void
}

export const AddForm = ({
  btnTitle,
  loading = false,
  collections,
  onSubmitFn,
  defCollectionName = ""
}: Props) => {
  const [validator, setValidator] = useState(null)

  const { setWisherState } = useContext(WisherStateContext)

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    if (validator === null) {
      return
    }

    setValidator(null)
  }, [inputValue])

  useEffect(() => {
    if (!defCollectionName) {
      return
    }

    setInputValue(defCollectionName)
  }, [defCollectionName])

  const requiredValidator = useMemo((): boolean => {
    return (
      inputValue.trim() === "" ||
      inputValue === null ||
      inputValue === undefined
    )
  }, [inputValue])

  const collectionNameValidator = useMemo(() => {
    return collections !== null && collections.includes(inputValue)
  }, [inputValue])

  const validatorMaxLength = useMemo(() => {
    return inputValue.length > 120
  }, [inputValue])

  const onResetClick = () => {
    setInputValue("")

    setWisherState((wisher) => ({ ...wisher, collectionName: "" }))
  }

  const onSubmitClick = () => {
    if (requiredValidator) {
      setValidator("Field is required")

      return
    }

    if (collectionNameValidator) {
      setValidator("You already have a collection with this name")

      return
    }

    if (validatorMaxLength) {
      setValidator("Max collection name length is 120 symbols")

      return
    }

    if (loading) {
      return
    }

    onSubmitFn(inputValue)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        onSubmitClick()
      }}
      className="extensions-wisher-add-form">
      <Input
        title="title"
        lazyAutofocus={250}
        errorMessage={validator}
        value={inputValue}
        onChangeValue={(value) => setInputValue(value)}>
        {!requiredValidator && (
          <Button btnType="icon" onClickFn={onResetClick}>
            <CrossCircleSvgIcon />
          </Button>
        )}
      </Input>

      <Button btnColor="primary" type="submit" size="md">
        <div className="extensions-wisher-add-form__action">
          <span>{btnTitle}</span>

          <Loader size={5.5} isLoading={loading} />
        </div>
      </Button>
    </form>
  )
}
