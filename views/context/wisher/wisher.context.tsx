import { createContext, useState, type ReactNode } from "react"

export type WisherMessage =
  | "create-wisher"
  | "create-collection"
  | "add-to-collection"
  | "item-setting"
  | "collection-settings"
  | "collection-update-name"
  | "collection-delete"
  | "wisher-item-delete"
  | "collection-list-short"
  | "wishes-sort"
  | "delete-user"
  | "collections-dnd"
  | null

interface Props {
  children: ReactNode
}

interface WisherStateContextType {
  isShow: boolean
  hasMessage: WisherMessage
  collectionName: string
  snackbar: {
    title: string
    action: boolean
  } | null
  isCreateCollectionHelp: boolean
  isDetailsHelp: boolean
}

interface ContextState {
  setWisherState: React.Dispatch<React.SetStateAction<WisherStateContextType>>
  wisherSate: WisherStateContextType
}

export const WisherStateContext = createContext<ContextState>(null)

export const WisherContext = ({ children }: Props) => {
  const [wisherSate, setWisherState] = useState<WisherStateContextType>({
    isShow: false,
    hasMessage: null,
    collectionName: "",
    snackbar: null,
    isCreateCollectionHelp: true,
    isDetailsHelp: true
  })

  return (
    <WisherStateContext.Provider
      value={{
        wisherSate,
        setWisherState
      }}>
      <div className="extensions-wisher-context">{children}</div>
    </WisherStateContext.Provider>
  )
}
