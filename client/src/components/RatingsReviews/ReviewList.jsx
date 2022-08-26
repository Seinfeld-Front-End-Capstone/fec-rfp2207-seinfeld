import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => {
  return (
    <div id="RR-reviews-ctn">
      {props.reviews.map(review => <ReviewEntry key={review.review_id} review={review}/>)}
    </div>
  )
}

export default ReviewList;