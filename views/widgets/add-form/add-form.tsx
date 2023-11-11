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
  const { setWisherState } = useContext(WisherStateContext)

  const [inputValue, setInputValue] = useState(defCollectionName)

  useEffect(() => {
    if (defCollectionName) {
      setInputValue(defCollectionName)
    }
  }, [defCollectionName])

  const requiredValidator = (): boolean => {
    return inputValue === "" || inputValue === null || inputValue === undefined
  }

  const errorValidator = useMemo(() => {
    return collections !== null && collections.includes(inputValue)
  }, [inputValue])

  const onResetClick = () => {
    setInputValue("")

    setWisherState((wisher) => ({ ...wisher, collectionName: "" }))
  }

  const onSubmitClick = () => {
    if (requiredValidator() || errorValidator || loading) {
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
        title="collection name*"
        lazyAutofocus={250}
        errorMessage={
          errorValidator && "You already have a collection with this name"
        }
        value={inputValue}
        onChangeValue={(value) => setInputValue(value)}>
        <Button btnType="icon" onClickFn={onResetClick}>
          <CrossCircleSvgIcon />
        </Button>
      </Input>

      <Button
        disable={requiredValidator() || errorValidator}
        btnColor="primary"
        type="submit"
        size="md">
        <div className="extensions-wisher-add-form__action">
          <span>{btnTitle}</span>

          <Loader size={5.5} isLoading={loading} />
        </div>
      </Button>
    </form>
  )
}
