type ReviewProps = {
  rating?: number
}

const prepareRating = (rating: number | undefined) => {
  if (!rating) return 'Not rating yeat'

  if (rating >= 0 && rating < 3) return 'Not bad'

  if (rating >= 3 && rating <= 4) return 'Good'

  if (rating > 4) return 'Very good'
}

export const Review = ({ rating }: ReviewProps) => (
  <div>
    {' '}
    {rating} - {prepareRating(rating)}
  </div>
)
