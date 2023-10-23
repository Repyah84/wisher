import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

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
      <div
        onClick={onEditClick}
        className="extension-wisher-item-setting__item">
        <span>Edit</span>
      </div>

      <div className="extension-wisher-item-setting__item">
        <span>Delete</span>
      </div>

      <div className="extension-wisher-item-setting__item">
        <span>Mark as purchased</span>
      </div>
    </div>
  )
}
