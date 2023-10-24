interface Props {
  isLoading: boolean
  size?: number
}

export const Loader = ({ isLoading, size = 16 }: Props) => {
  return (
    isLoading && (
      <div
        style={{
          fontSize: `${size}px`
        }}
        className="extensions-wisher-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  )
}
