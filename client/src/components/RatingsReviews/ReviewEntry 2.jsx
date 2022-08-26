import React from 'react';

const ReviewEntry = (props) => {
  return (
    <div>
      <h2>{props.review.summary}</h2>
    </div>
  )
}

export default ReviewEntry;