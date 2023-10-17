interface Props {
  isLoading: boolean
}

export const Loader = ({ isLoading }: Props) => {
  return isLoading ? (
    <div className="extensions-wisher-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <></>
  )
}
