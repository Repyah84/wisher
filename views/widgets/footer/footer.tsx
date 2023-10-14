import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { ButtonNav } from "../../components/button-nav/button-nav"
import { Help } from "../../components/help/help"
import { AddSvgIcon } from "../../components/icons/add/add"
import { HeartSvgIcon } from "../../components/icons/heart/heart"
import { OptionsSvgIcon } from "../../components/icons/options/options"
import { MessageOverlay } from "../../components/message/message"

export const Footer = () => {
  const [isMessageItem, setIsMessageItem] = useState(true)

  const navigate = useNavigate()

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const noMessageClosed = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    setIsMessageItem(true)
  }

  const onNavItemClick = () => {
    setWisherState((wisher) => {
      return { ...wisher, hasMessage: null }
    })

    navigate("/wisher/add-wisher")
  }

  const onMessageCloseStart = () => {
    setIsMessageItem(false)
  }

  const getMessageState = () => {
    return hasMessage === "create-wisher"
  }

  return (
    <div className="extensions-wisher-footer">
      <MessageOverlay
        hasMessage={getMessageState()}
        noMessageClosed={noMessageClosed}
        onMessageCloseStart={onMessageCloseStart}>
        <Help>
          Tap the button and choose your way of adding wishes to the list
        </Help>
      </MessageOverlay>

      <ButtonNav link="/wisher/wishes">
        <HeartSvgIcon />
      </ButtonNav>

      {getMessageState() ? (
        <div
          onClick={onNavItemClick}
          is-message-item={isMessageItem.toString()}
          className="extensions-wisher-footer__message-nav-item">
          <AddSvgIcon />
        </div>
      ) : (
        <ButtonNav link="/wisher/add-wisher">
          <AddSvgIcon />
        </ButtonNav>
      )}

      <ButtonNav link="/wisher/details">
        <OptionsSvgIcon />
      </ButtonNav>
    </div>
  )
}
