import groupIcon from "data-base64:~assets/group.svg"
import { useEffect, useState } from "react"

import { WisherCollectionShort } from "../wishes-collection-short/wishes-collection-short"

interface Props {
  collections: string[]
  collectionsDrag: (value: string[]) => void
}

export const CollectionsDnd = ({ collections, collectionsDrag }: Props) => {
  const [items, setItems] = useState(collections || [])
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
      {items.map((name) => (
        <div
          key={name}
          className={`extensions-wisher-collections-dnd__item ${
            draggingItem === name &&
            "extensions-wisher-collections-dnd__item--dragging"
          }`}
          draggable={true}
          onDragStart={(e) => handleDragStart(e, name)}
          onDragOver={(e) => handleDragOver(e, name)}
          onDragEnd={handleDragEnd}>
          <WisherCollectionShort collectionName={name}>
            <img width={24} height={24} src={groupIcon} alt="Group" />
          </WisherCollectionShort>
        </div>
      ))}
    </div>
  )
}
