import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { Help } from "~views/components/help/help"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { AddForm } from "~views/widgets/add-form/add-form"
import { WishesCollectionsEmpty } from "~views/widgets/wishes-collections-empty/wishes-collections-empty"

export const WishesCollectionsPage = () => {
  const collections = null

  const navigate = useNavigate()

  //TO move tol async store
  const {
    wisherSate: { isCreateCollectionHelp },
    setWisherState
  } = useContext(WisherStateContext)

  const messageClosed = () => {
    setWisherState((wisher) => ({ ...wisher, isCreateCollectionHelp: false }))
  }
  //

  const onCreateCollectionClick = (value: string) => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigate(`/wisher/wishes-collection/${value}`)
  }

  return (
    <>
      <div className="extensions-wisher-wishes-collections-page">
        {collections === null ? <WishesCollectionsEmpty /> : <></>}
      </div>

      <Popup title="Create the collection" typeMessage="create-collection">
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
    </>
  )
}
