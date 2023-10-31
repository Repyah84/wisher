import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { KEY_PARAMS, type SortParamKey } from "~models/sort-data"
import { sortState } from "~store/slices/sort"
import type { RootState } from "~store/wisher.store"
import { CheckSvg } from "~views/components/icons/check/check"
import { SettingsItem } from "~views/components/settings-item/settings-item"

interface Props {
  onSelectedSortParam: () => void
}

export const SortLayout = ({ onSelectedSortParam }: Props) => {
  const sortParam = useSelector(({ sort: { data } }: RootState) => data)

  const initialValue = useMemo(() => {
    return sortParam
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    if (initialValue === sortParam) {
      return
    }

    onSelectedSortParam()
  }, [sortParam])

  const onSelectParam = (value: SortParamKey) => {
    dispatch(sortState(value))
  }

  return (
    <div className="extensions-wisher-sort">
      {KEY_PARAMS.map((item) => (
        <SettingsItem key={item} onClickFn={() => onSelectParam(item)}>
          <span className="extensions-wisher-sort__option-title">{item}</span>
          {sortParam === item && <CheckSvg />}
        </SettingsItem>
      ))}
    </div>
  )
}
