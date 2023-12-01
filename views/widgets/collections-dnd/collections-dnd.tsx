import groupIcon from "data-base64:~assets/group.svg"
import { useEffect, useState } from "react"

import { WisherCollectionShort } from "../wishes-collection-short/wishes-collection-short"

interface Props {
  collectionIds: string[]
  collectionsDrag: (value: string[]) => void
}

export const CollectionsDnd = ({ collectionIds, collectionsDrag }: Props) => {
  const [items, setItems] = useState(collectionIds || [])
  const [draggingItem, setDraggingItem] = useState(null)

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: string
  ) => {
    e.dataTransfer.effectAllowed = "move"

    e.dataTransfer.setData("text/plain", item)

    setDraggingItem(item)
  }

  const handleDragEnd = () => {
    setDraggingItem(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, item: string) => {
    e.preventDefault()

    if (!draggingItem) {
      return
    }

    const itemsCopy = [...items]
    const draggingIndex = itemsCopy.indexOf(draggingItem)
    const targetIndex = itemsCopy.indexOf(item)

    itemsCopy.splice(draggingIndex, 1)
    itemsCopy.splice(targetIndex, 0, draggingItem)

    setItems(itemsCopy)
  }

  useEffect(() => {
    collectionsDrag(items)
  }, [items])

  return (
    <div className="extensions-wisher-collections-dnd">
      {items.map((id) => (
        <div
          key={id}
          className={`extensions-wisher-collections-dnd__item ${
            draggingItem === id &&
            "extensions-wisher-collections-dnd__item--dragging"
          }`}
          draggable={true}
          onDragStart={(e) => handleDragStart(e, id)}
          onDragOver={(e) => handleDragOver(e, id)}
          onDragEnd={handleDragEnd}>
          <WisherCollectionShort collectionsId={id}>
            <img width={24} height={24} src={groupIcon} alt="Group" />
          </WisherCollectionShort>
        </div>
      ))}
    </div>
  )
}
