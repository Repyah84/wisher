const getLabelForRating = (rating: number) => {
  switch (rating) {
    case 1:
      return "May be later"
    case 2:
      return "I’ll think about it"
    case 3:
      return "Looks like I need it"
    case 4:
      return "Definitely I’ll buy it"
    case 5:
      return "My dream!"
    default:
      return "Desire level not set"
  }
}

export const RatingTitle = ({ rating }: { rating: number }) => {
  return (
    <span className="extensions-rating-title">{getLabelForRating(rating)}</span>
  )
}
