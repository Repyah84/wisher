import { useContext } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import type { RootState } from "~store/wisher.store"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { WisherSvgIcon } from "../icons/wisher/wisher"

interface Props {
  isShow: boolean
}

export const Badge = ({ isShow }: Props) => {
  const {
    wisherSate: { isShow: popupIsOpen },
    setWisherState
  } = useContext(WisherStateContext)

  const wisherData = useSelector(({ wisher: { data } }: RootState) => data)

  const navigate = useNavigate()

  const updateWisher = () => {
    setWisherState((wisher) => ({
      ...wisher,
      isShow: !wisher.isShow,
      hasMessage: null
    }))

    if ((wisherData === null || wisherData === undefined) && !popupIsOpen) {
      navigate("/wisher/wisher-add")
    }
  }

  return (
    isShow && (
      <div onClick={updateWisher} className="extensions-wisher-badge">
        <WisherSvgIcon />
      </div>
    )
  )
}
