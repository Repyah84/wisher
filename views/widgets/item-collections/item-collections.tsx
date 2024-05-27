import { useMemo } from "react"

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

  const collectionsLabels = useMemo(() => {
    if (collectionsIds === undefined || collectionsIds === null) {
      return <></>
    }

    const collections = collectionsIds.reduce((acc, id) => {
      const collection = getCollectionById(id)

      if (collection) {
        acc.push(collection)
      }

      return acc
    }, [])

    if (collections.length === 0) {
      return <></>
    }

    return collections.map(({ id, title }) => (
      <Label
        onLabelClick={onCollectionItemClick}
        labelType="active"
        key={id}
        title={title}
      />
    ))
  }, [collectionsIds])

  return (
    <div className="extensions-wisher-item-collections">
      <Label
        labelType={labelType}
        loading={loading}
        onLabelClick={onAddClickFn}
        title={actionTitle}
      />

      {collectionsLabels}
    </div>
  )
}
