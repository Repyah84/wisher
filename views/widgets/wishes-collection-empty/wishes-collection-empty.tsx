import svgIcon from "data-base64:~assets/empty-collection.svg"

import { Button } from "~views/components/button/button"

export const WisherCollectionEmpty = () => {
  return (
    <div className="extensions-wisher-collection-empty">
      <img width={104} height={104} src={svgIcon} alt="Empty Collection" />

      <p className="extensions-wisher-collection-empty__description">
        You haven’t added any saved wishes to this collection yet.
      </p>

      <div className="extensions-wisher-collection-empty__action">
        <Button size="md" btnColor="primary" onClickFn={() => undefined}>
          ADD TO COLLECTION
        </Button>
      </div>

      <p className="extensions-wisher-collection-empty__description">
        Don’t have any ideas ? No worries, adding your wishes is so easy with
        Wisher!
      </p>
    </div>
  )
}
