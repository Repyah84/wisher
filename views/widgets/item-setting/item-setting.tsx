import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { SettingsItem } from "~views/components/settings-item/settings-item"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const ItemSetting = () => {
  const { itemId } = useParams()

  const navigate = useNavigate()

  const { setWisherState } = useContext(WisherStateContext)

  const onEditClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigate(`/wisher-item-edit/${itemId}`)
  }

  const onDeleteClick = () => {}

  const onMarlClick = () => {}

  return (
    <div className="extension-wisher-item-setting">
      <SettingsItem onClickFn={onEditClick}>
        <span>Edit</span>
      </SettingsItem>

      <SettingsItem onClickFn={onDeleteClick}>
        <span>Delete</span>
      </SettingsItem>

      <SettingsItem onClickFn={onMarlClick}>
        <span>Mark as purchased</span>
      </SettingsItem>
    </div>
  )
}
