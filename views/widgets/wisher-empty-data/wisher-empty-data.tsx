import imageGarage from "data-base64:~assets/garage.png"

import { Button } from "~views/components/button/button"
import { ReloadSvgIcon } from "~views/components/icons/reload/reload"
import { Rating } from "~views/components/rating/rating"

interface Props {
  retryFn: () => void
  onEditClick: () => void
}

export const WisherEmptyData = ({ retryFn, onEditClick }: Props) => {
  return (
    <div className="extensions-wisher-wisher-empty-data">
      <img src={imageGarage} width={192} height={192} alt="Garage" />

      <Rating rating={0}>
        <span className="extensions-wisher-wisher-empty-data__rating-title">
          Personal Rating
        </span>
      </Rating>

      <p className="extensions-wisher-wisher-empty-data__description">
        Sorry, we couldn’t find any data about the wish :( <br /> Please tap the
        EDIT button to add more information
      </p>

      <Button btnType="stroke" btnColor="primary" onClickFn={retryFn}>
        <ReloadSvgIcon />
        <span>RETRY</span>
      </Button>

      <div className="extensions-wisher-wisher-empty-data__action">
        <Button size="md" onClickFn={onEditClick}>
          EDIT
        </Button>

        <Button size="md" disable={true} onClickFn={() => undefined}>
          SAVE
        </Button>
      </div>
    </div>
  )
}
