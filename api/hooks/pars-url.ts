import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ParserUrlService } from "~api/parser-url/parser-url.service"
import {
  resetWisher,
  setWisher,
  type WisherSearchData
} from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"

interface ParsUrlInputData {
  url: string
  signal: AbortSignal
}

export const useParsUrl = () => {
  const dispatch = useDispatch()

  const data = useSelector(({ wisher: { data } }: RootState) => data)

  const [controller, setController] = useState(new AbortController())

  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [canceled, setCanceled] = useState(false)

  const mutate = ({ url, signal }: ParsUrlInputData) => {
    setIsLoading(true)

    ParserUrlService.getDataByUrl(url, signal)
      .then((res) => {
        setIsLoading(false)

        if (res.error) {
          setIsError(new Error(`${res.error.info}`))

          return
        }

        setIsSuccess(true)

        const { image, priceCurrency, price, name, icon } = res

        const data: WisherSearchData = {
          images: image ?? null,
          input: {
            currency: priceCurrency ?? null,
            faviconUrl: icon ?? null,
            imageUrl: image[0] ?? null,
            note: "",
            personalRating: 0,
            price: price ?? 0,
            title: name ?? "",
            url: window.location.href
          },
          imageUpload: undefined
        }

        dispatch(setWisher(data))
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(error)
      })
  }

  useEffect(() => {
    setIsError(null)
    setCanceled(false)
    setIsSuccess(false)

    const url = window.location.href
    const signal = controller.signal

    if (data === null || data.input.url !== url) {
      mutate({ url, signal })
    }
  }, [controller, data])

  const invalidate = () => {
    dispatch(resetWisher())

    setController(new AbortController())
  }

  const cancel = () => {
    controller.abort()

    setCanceled(true)
  }

  return { data, isError, isSuccess, isLoading, canceled, invalidate, cancel }
}
