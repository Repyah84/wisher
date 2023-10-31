import { SortType, type Sort } from "~gql/types/graphql"

export const KEY_PARAMS = [
  "Oldest",
  "Most recent",
  "Least expensive",
  "Most expensive",
  "Most wanted"
] as const

export type SortParamKey = (typeof KEY_PARAMS)[number]

export class SortData {
  private static readonly value: [SortParamKey, Sort][] = [
    ["Oldest", { field: "createdInt", type: SortType.Asc }],
    ["Most recent", { field: "createdInt", type: SortType.Desc }],
    ["Most expensive", { field: "price", type: SortType.Desc }],
    ["Least expensive", { field: "price", type: SortType.Asc }],
    ["Most wanted", { field: "personalRating", type: SortType.Desc }]
  ]

  private static readonly sortParams = new Map<SortParamKey, Sort>(this.value)

  public static getSortParma(key: SortParamKey): Sort {
    return this.sortParams.get(key)
  }
}
