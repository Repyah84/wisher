import imageGarage from "data-base64:~assets/garage.png"

import { Button } from "~views/components/button/button"
import { ReloadSvgIcon } from "~views/components/icons/reload/reload"

interface Props {
  retryFn: () => void
}

export const WisherEmptyData = ({ retryFn }: Props) => {
  return (
    <div className="extensions-wisher-wisher-empty-data">
      <img src={imageGarage} alt="Garage" />

      <Button btnType="stroke" btnColor="primary" onClickFn={retryFn}>
        <ReloadSvgIcon />
        <span>RETRY</span>
      </Button>

      <p className="extensions-wisher-wisher-empty-data__description">
        Sorry, we couldn’t find any data about the wish :( <br /> Please tap the
        EDIT button to add more information
      </p>

      <div className="extensions-wisher-wisher-empty-data__action">
        <Button size="md" onClickFn={() => console.log("click")}>
          EDIT
        </Button>

        <Button size="md" disable={true} onClickFn={() => console.log("click")}>
          SAVE
        </Button>
      </div>
    </div>
  )
}
