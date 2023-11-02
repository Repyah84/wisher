import iconSvg from "data-base64:~assets/arrow-uot.svg"

import { Button } from "~views/components/button/button"
import { useAsyncStoreDataWithContext } from "~views/hooks/async-store-data"
import { HeaderNav } from "~views/widgets/header-nav/header-nav"

export const HelpPage = () => {
  const { setStoreDataDetailsHelp, setStoreDataIsCreateCollectionHelp } =
    useAsyncStoreDataWithContext()

  const onResetDataToStore = () => {
    setStoreDataDetailsHelp(true), setStoreDataIsCreateCollectionHelp(true)
  }

  return (
    <div className="extensions-wisher-help-page">
      <HeaderNav>
        <span>Help & Tips</span>
      </HeaderNav>

      <div className="extensions-wisher-help-page__content">
        <Button onClickFn={onResetDataToStore} btnType="stroke">
          <span>Tips and tricks on how to use app</span>
        </Button>

        <a
          href="https://www.wishr.app/how-to-save-from-extension"
          target="_blanc"
          className={`__extensions-wisher-details-option__ extensions-wisher-help-page__link`}>
          <span>How to save from browser with extension</span>

          <img width={16} height={16} src={iconSvg} alt="outside" />
        </a>
      </div>
    </div>
  )
}
