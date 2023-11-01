import { useState } from "react"

import { Button } from "~views/components/button/button"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"

interface Props {
  btnTitle: string
  loading?: boolean
  collections: string[]
  onSubmitFn: (e: string) => void
}

export const AddForm = ({
  btnTitle,
  loading = false,
  collections,
  onSubmitFn
}: Props) => {
  const [inputValue, setInputValue] = useState("")

  const requiredValidator = (): boolean => {
    return inputValue === "" || inputValue === null || inputValue === undefined
  }

  const errorValidator = () => {
    return collections !== null && collections.includes(inputValue)
  }

  const onSubmitClick = () => {
    if (requiredValidator() || errorValidator() || loading) {
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
        errorMessage={
          errorValidator() && "You already have a collection with this name"
        }
        value={inputValue}
        onChangeValue={(value) => setInputValue(value as string)}
        onResetValue={() => setInputValue("")}
      />

      <Button
        disable={requiredValidator() || errorValidator()}
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
