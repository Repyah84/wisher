import { Label } from "~views/components/label/label"
import { Loader } from "~views/components/loader/loader"

interface Props {
  loading?: boolean
  collections: string[]
  onAddClickFn: () => void
}

export const ItemCollection = ({
  collections,
  onAddClickFn,
  loading = false
}: Props) => {
  return (
    <div className="extensions-wisher-item-collections">
      <Label
        loading={loading}
        onLabelClick={onAddClickFn}
        title="Add to collection"
      />

      {collections &&
        collections.length > 0 &&
        collections.map((name) => (
          <Label labelType="active" key={name} title={name} />
        ))}
    </div>
  )
}
