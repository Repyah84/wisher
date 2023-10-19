import { useParsUrl } from "~api/hooks/pars-url"
import { ErrorLayout } from "~views/widgets/error-layout/error-layout"
import { LoaderLayout } from "~views/widgets/loader-layout/loader-layout"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"
import { WisherLayout } from "~views/widgets/wisher-layout/wisher-layout"

export const AddWisherPage = () => {
  const { data, isSuccess, isError, canceled, invalidate, cancel } =
    useParsUrl()

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", data)

  return (
    <div className="extensions-wisher-add-wisher-page">
      {!isSuccess && !isError ? (
        <LoaderLayout cancelFn={cancel}>
          Importing data from domain.com <br /> Please wait.
        </LoaderLayout>
      ) : isSuccess ? (
        <WisherLayout data={data} />
      ) : canceled ? (
        <WisherEmptyData retryFn={invalidate} />
      ) : (
        <ErrorLayout retryFn={invalidate} />
      )}
    </div>
  )
}
