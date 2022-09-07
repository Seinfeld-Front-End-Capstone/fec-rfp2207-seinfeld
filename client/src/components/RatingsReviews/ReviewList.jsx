import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = ({ reviews, setShowPhotoModal}) => {
  return (
    <div id="RR-reviews-ctn">
      {reviews.map(review => <ReviewEntry key={review.review_id} review={review} setShowPhotoModal={setShowPhotoModal}/>)}
    </div>
  )
}

export default ReviewList;