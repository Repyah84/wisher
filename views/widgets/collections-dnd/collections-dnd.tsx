import groupIcon from "data-base64:~assets/group.svg"
import { useCallback } from "react"

import { WisherCollectionShort } from "../wishes-collection-short/wishes-collection-short"

interface Props {
  collections: string[]
}

export const CollectionsDnd = ({ collections }: Props) => {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, [])

  return (
    <div className="extensions-wisher-collections-dnd">
      {collections.map((name, index) => (
        <div key={index} className="extensions-wisher-collections-dnd__item">
          <WisherCollectionShort collectionName={name}>
            <img width={24} height={24} src={groupIcon} alt="Group" />
          </WisherCollectionShort>
        </div>
      ))}
    </div>
  )
}
