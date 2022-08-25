import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => {
  return (
    props.reviews.map(review => <ReviewEntry review={review}/>)
  )
}

export default ReviewList;