import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { ButtonNav } from "../button-nav/button-nav"
import { Help } from "../help/help"
import { AddSvgIcon } from "../icons/add/add"
import { HeartSvgIcon } from "../icons/heart/heart"
import { OptionsSvgIcon } from "../icons/options/options"
import { MessageOverlay } from "../message/message"

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

  return (
    <div className="extensions-wisher-footer">
      <MessageOverlay
        noMessageClosed={noMessageClosed}
        onMessageCloseStart={onMessageCloseStart}>
        <Help>
          Tap the button and choose your way of adding wishes to the list
        </Help>
      </MessageOverlay>

      <ButtonNav link="/wisher/wishes">
        <HeartSvgIcon />
      </ButtonNav>

      {hasMessage === "create-wisher" ? (
        <div
          onClick={onNavItemClick}
          is-message-item={isMessageItem.toString()}
          className="extensions-wisher-footer__message-nav-item-overlay">
          <AddSvgIcon />
        </div>
      ) : (
        <ButtonNav link="/wisher/add-wisher">
          <AddSvgIcon />
        </ButtonNav>
      )}

      <ButtonNav link="/login">
        <OptionsSvgIcon />
      </ButtonNav>
    </div>
  )
}
