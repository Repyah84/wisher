import getSymbolFromCurrency from "currency-symbol-map"
import circleSvg from "data-base64:~assets/circle.svg"
import noteSvg from "data-base64:~assets/note.svg"
import { useContext } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { WishDate } from "~views/components/date/date"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { OptionsSvgIcon } from "~views/components/icons/options/options"
import { ShareSvgIcon } from "~views/components/icons/share/share"
import { Rating } from "~views/components/rating/rating"
import { WishImage } from "~views/components/wish-image/wish-image"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { Header } from "~views/widgets/header/header"

export const WisherItemPage = () => {
  const { itemId } = useParams()

  const navigate = useNavigate()

  const { setWisherState } = useContext(WisherStateContext)

  const {
    imageUrl,
    price,
    currency,
    note,
    title,
    personalRating,
    createdAt,
    faviconUrl,
    marketplace
  } = useSelector(({ items: { data } }: RootState) =>
    data.find(({ id }) => itemId === id)
  )

  const priceValue = `${getSymbolFromCurrency(currency)}${price}`

  const onSettingClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "item-setting" }))
  }

  return (
    <div className="extension-wisher-item">
      <Header />

      <main className="extension-wisher-item__main">
        <div className="extension-wisher-item__image">
          <WishImage image={imageUrl} />

          <div className="extension-wisher-item__nav">
            <Button
              size="md"
              btnType="icon"
              onClickFn={() => navigate("/wisher/wishes")}>
              <ArrowLeftSvgIcon />
            </Button>

            <Button size="md" btnType="icon" onClickFn={onSettingClick}>
              <OptionsSvgIcon />
            </Button>
          </div>

          <div className="extension-wisher-item__public">
            <div className="extension-wisher-item__domain-info">
              <img
                width={16}
                height={16}
                src={faviconUrl || circleSvg}
                alt="Fav icon"
              />

              <span>{marketplace || "Domain without icon"}</span>
            </div>

            <Button size="md" btnType="icon" onClickFn={() => undefined}>
              <ShareSvgIcon />
            </Button>
          </div>
        </div>

        <div className="extension-wisher-item__pudding-wrap">
          <div className="extension-wisher-item__create-info">
            <WishDate date={createdAt} />

            <Rating itemWidth={20} rating={personalRating} />
          </div>

          <p className="extension-wisher-item__title">{title}</p>

          <span className="extension-wisher-item__price">{priceValue}</span>

          <div className="extension-wisher-item__share">
            <div className="extension-wisher-item__share-item">
              <img width={24} height={24} src={noteSvg} alt="Note-img" />

              <span>View notes</span>
            </div>

            <Button btnType="stroke" onClickFn={() => undefined}>
              <div className="extension-wisher-item__link">
                <span>Share</span>

                <ShareSvgIcon />
              </div>
            </Button>
          </div>

          <div
            onClick={() => navigate(`/wisher-item-edit/${itemId}`)}
            className="extension-wisher-item__notes">
            <div className="extension-wisher-item__notes-header">
              <span>NOTES</span>

              <span>(CLICK TO EDIT)</span>
            </div>

            <p className="extension-wisher-item__note">{note || "..."}</p>
          </div>
        </div>
      </main>

      <footer className="extension-wisher-item__footer">
        <Button size="md" btnColor="primary" onClickFn={() => undefined}>
          <span>SHOP NOW</span>
        </Button>
      </footer>
    </div>
  )
}
