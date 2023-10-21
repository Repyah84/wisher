import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ParserUrlService } from "~api/parser-url/parser-url.service"
import { resetWisher } from "~store/actions/reset-wisher"
import { setWisher, type WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"

interface ParsUrlInputData {
  url: string
  signal: AbortSignal
}

export const useParsUrl = () => {
  const dispatch = useDispatch()

  const data = useSelector(({ wisher: { data } }: RootState) => data)

  const [canceled, setCanceled] = useState(false)

  const [controller, setController] = useState(new AbortController())

  const { mutate, isError, isLoading, isSuccess } = useMutation({
    mutationFn: ({ url, signal }: ParsUrlInputData) =>
      ParserUrlService.getDataByUrl(url, signal),
    onSuccess: (res) => {
      const { image, priceCurrency, price, description, icon } = res

      const data: WisherSearchData = {
        images: image ?? null,
        input: {
          currency: priceCurrency ?? null,
          faviconUrl: icon ?? null,
          imageUrl: image ? image[0] : null,
          note: "",
          personalRating: 0,
          price,
          title: description ?? null,
          url: window.location.href
        }
      }

      dispatch(setWisher(data))
    }
  })

  useEffect(() => {
    if (canceled) {
      setCanceled(false)
    }

    const url = window.location.href
    const signal = controller.signal

    if (data === null) {
      mutate({ url, signal })

      return
    }

    if (data.input.url !== url) {
      dispatch(resetWisher())

      mutate({ url, signal })
    }
  }, [controller])

  const invalidate = () => {
    setController(new AbortController())
  }

  const cancel = () => {
    controller.abort()

    setCanceled(true)
  }

  return { data, isError, isSuccess, isLoading, canceled, invalidate, cancel }
}
