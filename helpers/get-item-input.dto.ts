import type { Item, ItemInput } from "~gql/types/graphql"

export const InputItemDTO = (value: Item): ItemInput => {
  const obg: ItemInput = {
    id: value.id ?? null,
    imageUrl: value.imageUrl ?? null,
    currency: value.currency ?? "USD",
    isPurchased: value.isPurchased ?? false,
    note: value.note ?? "",
    personalRating: value.personalRating ?? 0,
    price: value.price ?? 0,
    title: value.title ?? "",
    url: value.url ?? null
  }

  return obg
}
