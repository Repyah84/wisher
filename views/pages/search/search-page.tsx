import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useItemSearch } from "~gql/hooks/item-search"
import { resetSearchItems } from "~store/slices/search"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { CrossCircleSvgIcon } from "~views/components/icons/cross-circle/cross-circle"
import { InfiniteScroll } from "~views/components/infinite-scroll/infinite-scroll"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"
import { Header } from "~views/widgets/header/header"
import { Wishes } from "~views/widgets/wishes/wishes"

export const SearchPage = () => {
  let timer: ReturnType<typeof setTimeout> | null = null

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { loading, getItems } = useItemSearch()

  const [searchValue, setSearchValue] = useState("")

  const searchData = useSelector(({ search: { data } }: RootState) => data)

  const offset = useMemo(() => {
    return searchData.items.length
  }, [searchData])

  useEffect(() => {
    if (!searchValue) {
      return
    }

    timer = setTimeout(() => {
      getItems(searchValue, offset, 10, true).then(() => {})
    }, 500)

    return () => {
      clearTimeout(timer)

      timer = null
    }
  }, [searchValue])

  const onSearchValueChange = (value: string) => {
    setSearchValue(value)
  }

  const onSearchValueReset = () => {
    setSearchValue("")
    dispatch(resetSearchItems())
  }

  const onObserverEventFn = () => {
    if (loading || searchData.count === searchData.items.length) {
      return
    }

    getItems(searchValue, offset)
  }

  const onBackClick = () => {
    dispatch(resetSearchItems())

    navigate("/wisher/wishes/wishes-all")
  }

  return (
    <div className="extensions-wisher-search-page">
      <Header />

      <div className="extensions-wisher-search-page__action">
        <Button btnType="icon" onClickFn={onBackClick}>
          <ArrowLeftSvgIcon />
        </Button>

        <Input
          lazyAutofocus={50}
          value={searchValue}
          onChangeValue={onSearchValueChange}>
          {loading ? (
            <Loader size={5} isLoading={true} />
          ) : (
            <Button btnType="icon" onClickFn={onSearchValueReset}>
              <CrossCircleSvgIcon />
            </Button>
          )}
        </Input>
      </div>

      {searchData.items.length === 0 ? (
        <div className="extensions-wisher-search-page__empty">
          <img width={104} height={104} src={svgIcon} alt="empty" />

          <p className="extensions-wisher-search-page__description">
            Please type name of the wish which you’re looking
          </p>
        </div>
      ) : (
        <div className="extensions-wisher-search-page__items">
          <span className="extensions-wisher-search-page__items-count">
            Count: {searchData.count}
          </span>

          <InfiniteScroll observerEventFn={onObserverEventFn}>
            <Wishes wishes={searchData.items} />
          </InfiniteScroll>
        </div>
      )}
    </div>
  )
}
