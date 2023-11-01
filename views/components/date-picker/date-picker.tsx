import { forwardRef } from "react"
import DatePicker from "react-datepicker"

interface Props {
  title: string
  value: Date | null
  onDateChange: (data: Date) => void
}

export const WisherDatePicker = ({ title, value, onDateChange }: Props) => {
  const ExampleCustomInput = forwardRef<any, any>(({ value, onClick }, ref) => (
    <div className="extensions-wisher-date-picker">
      <span className="extensions-wisher-date-picker__title">{title}</span>

      <button
        type="button"
        className="extensions-wisher-date-picker__button"
        onClick={onClick}
        ref={ref}>
        {value ? (
          <span>{value}</span>
        ) : (
          <span className="extensions-wisher-date-picker__placeholder">
            Click to choose your birthday date
          </span>
        )}
      </button>
    </div>
  ))

  return (
    <DatePicker
      selected={value}
      showYearDropdown
      popperPlacement="top-end"
      dropdownMode="select"
      dateFormat="d MMMM yyyy"
      onChange={(date) => onDateChange(date)}
      customInput={<ExampleCustomInput />}
    />
  )
}
