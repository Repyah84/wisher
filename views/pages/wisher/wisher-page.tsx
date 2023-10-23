import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { Help } from "~views/components/help/help"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { AddForm } from "~views/widgets/add-form/add-form"
import { Footer } from "~views/widgets/footer/footer"
import { Header } from "~views/widgets/header/header"

export const WisherPage = () => {
  const navigate = useNavigate()

  const {
    wisherSate: { isCreateCollectionHelp, hasMessage, isShow },
    setWisherState
  } = useContext(WisherStateContext)

  const messageClosed = () => {
    setWisherState((wisher) => ({ ...wisher, isCreateCollectionHelp: false }))
  }

  const onCreateCollectionClick = (value: string) => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigate(`/wisher/wishes-collection/${value}`)
  }

  const popupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  return (
    <div className="extensions-wisher-page">
      <Header />

      <Outlet></Outlet>

      <Footer />

      <Popup
        title="Create the collection"
        hasPopup={hasMessage === "create-collection"}
        onCloseClick={popupClose}>
        <Help
          hasMessage={isCreateCollectionHelp}
          hasBtnClose={true}
          onMessageClosed={messageClosed}>
          Keep your gifts and wishes organized with various collections. Here
          are some collection ideas for you to get started: <br />
          Birthday <br />
          Wedding registry <br />
          My Little Black Dress <br />
          My top sneakers <br />
          For parents <br />
          Tip: don’t forget to share your collections with friends and family!
        </Help>

        <AddForm onSubmitFn={onCreateCollectionClick} />
      </Popup>
    </div>
  )
}
