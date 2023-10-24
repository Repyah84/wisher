import type { Item } from "~gql/types/graphql"
import { CheckSvg } from "~views/components/icons/check/check"
import { Wisher } from "~views/components/wisher/wisher"

interface Props {
  selected: boolean
  wish: Item
  onSelectFn: (id: string) => void
}

export const WisherSelect = ({ selected = false, wish, onSelectFn }: Props) => {
  return (
    <div
      onClick={() => onSelectFn(wish.id)}
      className="extensions-wisher-select-wrapper">
      <Wisher wish={wish} />

      {selected && (
        <div className="extensions-wisher-select-wrapper__wrapper">
          <div className="extensions-wisher-select-wrapper__item">
            <CheckSvg />
          </div>
        </div>
      )}
    </div>
  )
}
