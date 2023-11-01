import { useMemo, useState } from "react"
import { useSelector } from "react-redux"

import { useUserUpdate } from "~gql/hooks/user.mutate"
import type { UserInput } from "~gql/types/graphql"
import { ParsDate } from "~helpers/pars-date"
import type { RootState } from "~store/wisher.store"
import { ImageUploader } from "~views/components/image-upload/image-upload"
import { EditUserForm } from "~views/widgets/edit-user-from/edit-user-from"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"
import { Header } from "~views/widgets/header/header"

export const PersonalInfoPage = () => {
  const { loading, updateUser } = useUserUpdate()

  const [userImage, setUserImage] = useState<File | undefined>()

  const user = useSelector(({ user: { data } }: RootState) => data)

  const uploadImage = useMemo(() => {
    return userImage ? URL.createObjectURL(userImage) : user.imageUrl
  }, [user, userImage])

  const onUpdateUserData = (input: UserInput) => {
    const data: UserInput = {
      ...input,
      birthday: ParsDate(input.birthday)
    }

    updateUser(data, userImage)
  }

  return (
    <div className="extension-wisher-personal-info-page">
      <Header />

      <HeaderNav>
        <span>Personal information</span>
      </HeaderNav>

      <div className="extension-wisher-personal-info-page__content">
        <div className="extension-wisher-personal-info-page__user">
          <img
            className="extension-wisher-personal-info-page__user-image"
            width={72}
            height={72}
            src={uploadImage}
            alt="user image"
          />

          <ImageUploader
            title="Change profile photo"
            onImageChange={setUserImage}
          />
        </div>

        <EditUserForm
          isLoading={loading}
          user={user}
          onSubmitFn={onUpdateUserData}
        />
      </div>
    </div>
  )
}
