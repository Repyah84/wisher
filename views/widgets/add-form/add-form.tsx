import { useState } from "react"

import { Button } from "../../components/button/button"
import { Input } from "../../components/input/input"

interface Props {
  onSubmitFn: (e: string) => void
}

export const AddForm = ({ onSubmitFn }: Props) => {
  const [inputValue, setInputValue] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmitFn(inputValue)
      }}
      className="extensions-wisher-add-form">
      <Input
        value={inputValue}
        onChangeValue={setInputValue}
        onResetValue={() => setInputValue("")}
      />

      <Button
        btnColor="primary"
        type="submit"
        size="md"
        onClickFn={() => onSubmitFn(inputValue)}>
        CREATE
      </Button>
    </form>
  )
}
