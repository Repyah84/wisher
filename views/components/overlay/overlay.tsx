interface Props {
  initial: boolean
  isHide: boolean
  onClickFn: () => void
}

export const OverLay = ({ onClickFn, isHide, initial }: Props) => (
  <div
    host-initial={initial.toString()}
    className={`${
      isHide
        ? "extensions-wisher-overlay--hide"
        : "extensions-wisher-overlay--show"
    } extensions-wisher-overlay`}
    onClick={onClickFn}></div>
)
