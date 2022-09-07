import React from 'react';

//rating should be passed in as a float or int (not rounded)

//0.25 and 0.75 is correctly rendered mathematically but it's hard to see, we could manipulate this mathematically to that it's visually easier to see 0.25 and 0.75 by mapping 0.25 to 0.4 and 0.75 yo 0.6. The formulas below does this mathematical manipulation.
const Stars = ({ rating }) => {
  let roundedRating = Math.round(rating * 4) / 4;
  if (roundedRating % 1 === 0.75) {
    roundedRating = roundedRating - 0.75 + 0.6;
  } else if (roundedRating % 1 === 0.25) {
    roundedRating = roundedRating - 0.25 + 0.4;
  }
  let percent = (roundedRating / 5) * 100 + '%';

  return (
    <div className="Stars" style={{'--percent': percent}}>★★★★★</div>
  )
}

export default Stars;