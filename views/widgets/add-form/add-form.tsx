import { useState } from "react"

import { Button } from "~views/components/button/button"
import { Input } from "~views/components/input/input"

interface Props {
  onSubmitFn: (e: string) => void
}

export const AddForm = ({ onSubmitFn }: Props) => {
  const [inputValue, setInputValue] = useState("")

  const requiredValidator = (): boolean => {
    return inputValue === "" || inputValue === null || inputValue === undefined
  }

  const onSubmitClick = () => {
    if (requiredValidator()) {
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
        value={inputValue}
        onChangeValue={setInputValue}
        onResetValue={() => setInputValue("")}
      />

      <Button
        disable={requiredValidator()}
        btnColor="primary"
        type="submit"
        size="md"
        onClickFn={onSubmitClick}>
        CREATE
      </Button>
    </form>
  )
}
