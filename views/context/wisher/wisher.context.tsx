import { createContext, useState, type ReactNode } from "react"

export type WisherMessage = "create-wisher" | "create-collection" | null

interface Props {
  children: ReactNode
}

interface WisherStateContextType {
  isInitial: boolean
  isShow: boolean
  hasMessage: WisherMessage
  //TODO move in to async store
  isCreateCollectionHelp: boolean
  //
}

interface ContextState {
  setWisherState: React.Dispatch<React.SetStateAction<WisherStateContextType>>
  wisherSate: WisherStateContextType
}

export const WisherStateContext = createContext<ContextState>(null)

export const WisherContext = ({ children }: Props) => {
  const [wisherSate, setWisherState] = useState<WisherStateContextType>({
    isShow: false,
    isInitial: false,
    hasMessage: null,
    //TODO move in to async store
    isCreateCollectionHelp: true
    //
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
