import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import { ParserUrlService } from "~api/parser-url/parser-url.service"

export const useParsUrl = () => {
  const [canceled, setCanceled] = useState(false)
  const [controller, setController] = useState(new AbortController())

  const { mutate, data, isError, isLoading, isSuccess } = useMutation({
    mutationFn: (data: { signal: AbortSignal; url: string }) =>
      ParserUrlService.getDataByUrl(data.url, data.signal)
  })

  useEffect(() => {
    if (canceled) {
      setCanceled(false)
    }

    const url = window.location.href

    const signal = controller.signal

    mutate({ url, signal })
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
