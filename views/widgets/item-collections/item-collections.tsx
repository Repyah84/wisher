import { Label, type LabelType } from "~views/components/label/label"
import { useCollectionsState } from "~views/hooks/collections"

interface Props {
  actionTitle: string
  collectionsIds: string[]
  onAddClickFn: () => void
  labelType?: LabelType
  loading?: boolean
  onCollectionItemClick?: () => void
}

export const ItemCollection = ({
  actionTitle,
  collectionsIds,
  onAddClickFn,
  labelType = "default",
  loading = false,
  onCollectionItemClick
}: Props) => {
  const { getCollectionById } = useCollectionsState()

  return (
    <div className="extensions-wisher-item-collections">
      <Label
        labelType={labelType}
        loading={loading}
        onLabelClick={onAddClickFn}
        title={actionTitle}
      />

      {collectionsIds &&
        collectionsIds.length > 0 &&
        collectionsIds.map((id) => (
          <Label
            onLabelClick={onCollectionItemClick}
            labelType="active"
            key={id}
            title={getCollectionById(id)?.title || "Invalidate"}
          />
        ))}
    </div>
  )
}
