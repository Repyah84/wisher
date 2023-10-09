import { createContext, useState, type ReactNode } from "react"

type WisherMessage = "create-wisher" | null

interface Props {
  children: ReactNode
}

interface WisherStateContextType {
  isInitial: boolean
  isShow: boolean
  hasMessage: WisherMessage
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
    hasMessage: null
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
