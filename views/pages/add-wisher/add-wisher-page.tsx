import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"

export const AddWisherPage = () => {
  const data = null

  return (
    <div className="extensions-wisher-add-wisher-page">
      {data === null ? <WisherEmptyData /> : <></>}
    </div>
  )
}
