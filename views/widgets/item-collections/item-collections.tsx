import { Label, type LabelType } from "~views/components/label/label"

interface Props {
  actionTitle: string
  collections: string[]
  onAddClickFn: () => void
  labelType?: LabelType
  loading?: boolean
  onCollectionItemClick?: () => void
}

export const ItemCollection = ({
  actionTitle,
  collections,
  onAddClickFn,
  labelType = "default",
  loading = false,
  onCollectionItemClick
}: Props) => {
  return (
    <div className="extensions-wisher-item-collections">
      <Label
        labelType={labelType}
        loading={loading}
        onLabelClick={onAddClickFn}
        title={actionTitle}
      />

      {collections &&
        collections.length > 0 &&
        collections.map((name) => (
          <Label
            onLabelClick={onCollectionItemClick}
            labelType="active"
            key={name}
            title={name}
          />
        ))}
    </div>
  )
}
