import { useEffect, useState } from "react"

import type { User, UserInput } from "~gql/types/graphql"
import { Button } from "~views/components/button/button"
import { WisherDatePicker } from "~views/components/date-picker/date-picker"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"

interface Props {
  user: User
  onSubmitFn: (data: UserInput) => void
  isLoading?: boolean
}

export const EditUserForm = ({ user, onSubmitFn, isLoading }: Props) => {
  const parsEditDate = (data: User): UserInput => {
    const birthday = user.birthday ? new Date(user.birthday) : ""

    return {
      firstName: data.firstName,
      lastName: data.lastName,
      birthday
    }
  }

  const [editUser, setEditUser] = useState<UserInput>(parsEditDate(user))

  // useEffect(() => {
  //   console.log("useEffect", editUser)

  //   // editUser.birthday.
  // }, [editUser])

  const partial = (data: UserInput, value: Partial<UserInput>) => {
    return { ...data, ...value }
  }

  const change = (value: Partial<UserInput>) => {
    setEditUser((data) => partial(data, value))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        onSubmitFn(editUser)
      }}
      className="extensions-wisher-edit-user-form">
      <div className="extensions-wisher-edit-user-form__data">
        <Input
          title="first name"
          value={editUser.firstName}
          onChangeValue={(value) => change({ firstName: value })}
        />

        <Input
          title="last name"
          value={editUser.lastName}
          onChangeValue={(value) => change({ lastName: value })}
        />

        <WisherDatePicker
          value={editUser.birthday}
          onDateChange={(value) => change({ birthday: value })}
          title="birthday"
        />
      </div>

      <div className="extensions-wisher-edit-user-form__action">
        <Button size="md" type="submit" btnColor="primary">
          <div className="extensions-wisher-edit-user-form__btn-content">
            <span>SAVE </span>

            <Loader size={5.5} isLoading={isLoading} />
          </div>
        </Button>
      </div>
    </form>
  )
}
