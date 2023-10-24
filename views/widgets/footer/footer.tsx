import { useContext } from "react"

import { ButtonNav } from "~views/components/button-nav/button-nav"
import { Help } from "~views/components/help/help"
import { AddSvgIcon } from "~views/components/icons/add/add"
import { HeartSvgIcon } from "~views/components/icons/heart/heart"
import { OptionsSvgIcon } from "~views/components/icons/options/options"
import { MessageItem } from "~views/components/message-item/message-item"
import { MessageOverlay } from "~views/components/message/message"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

export const Footer = () => {
  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const onMessageCloseClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  return (
    <div className="extensions-wisher-footer">
      <MessageOverlay
        hasMessage={hasMessage === "create-wisher"}
        onMessageCloseClick={onMessageCloseClick}>
        <Help>
          Tap the button and choose your way of adding wishes to the list
        </Help>
      </MessageOverlay>

      <ButtonNav rootLink="wishes" link="/wisher/wishes/wishes-all">
        <HeartSvgIcon />
      </ButtonNav>

      <MessageItem hasItem={hasMessage === "create-wisher"}>
        <ButtonNav rootLink="wisher-add" link="/wisher/wisher-add">
          <AddSvgIcon />
        </ButtonNav>
      </MessageItem>

      <ButtonNav rootLink="details" link="/wisher/details">
        <OptionsSvgIcon />
      </ButtonNav>
    </div>
  )
}
