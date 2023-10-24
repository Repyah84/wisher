import { useState } from "react"

import { Button } from "~views/components/button/button"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"

interface Props {
  loading?: boolean
  onSubmitFn: (e: string) => void
}

export const AddForm = ({ loading = false, onSubmitFn }: Props) => {
  const [inputValue, setInputValue] = useState("")

  const requiredValidator = (): boolean => {
    return inputValue === "" || inputValue === null || inputValue === undefined
  }

  const onSubmitClick = () => {
    if (requiredValidator() && loading) {
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
        value={inputValue}
        onChangeValue={(value) => setInputValue(value as string)}
        onResetValue={() => setInputValue("")}
      />

      <Button
        disable={requiredValidator()}
        btnColor="primary"
        type="submit"
        size="md">
        <div className="extensions-wisher-add-form__action">
          <span>CREATE</span>

          <Loader size={5.5} isLoading={loading} />
        </div>
      </Button>
    </form>
  )
}
