import { useContext } from "react"

import { AddSvgIcon } from "~views/components/icons/add/add"
import { MessageItem } from "~views/components/message-item/message-item"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

import { ButtonNav } from "../../components/button-nav/button-nav"
import { Help } from "../../components/help/help"
import { HeartSvgIcon } from "../../components/icons/heart/heart"
import { OptionsSvgIcon } from "../../components/icons/options/options"
import { MessageOverlay } from "../../components/message/message"

export const Footer = () => {
  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const onMessageCloseClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const getMessageState = () => {
    return hasMessage === "create-wisher"
  }

  return (
    <div className="extensions-wisher-footer">
      <MessageOverlay
        hasMessage={getMessageState()}
        onMessageCloseClick={onMessageCloseClick}>
        <Help>
          Tap the button and choose your way of adding wishes to the list
        </Help>
      </MessageOverlay>

      <ButtonNav link="/wisher/wishes">
        <HeartSvgIcon />
      </ButtonNav>

      <MessageItem hasItem={getMessageState()}>
        <ButtonNav link="/wisher/add-wisher">
          <AddSvgIcon />
        </ButtonNav>
      </MessageItem>

      <ButtonNav link="/wisher/details">
        <OptionsSvgIcon />
      </ButtonNav>
    </div>
  )
}
