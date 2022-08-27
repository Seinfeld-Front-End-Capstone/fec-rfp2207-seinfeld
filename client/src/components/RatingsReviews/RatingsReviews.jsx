import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ExampleReviews from './ExampleReviews.js';
import please from '../../request.js';

const RatingsReviews = ({ productId }) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsOnDisplay, setReviewsOnDisplay] = useState([]);
  const [maxResults, setMaxResults] = useState(2);

  useEffect(() => {
    please.getReviews(productId)
    .then((data) => {
      console.log(`got review data from server ${data.data.results}`)
      setReviews(data.data.results);
      setReviewsOnDisplay(data.data.results.slice(0, maxResults));
    })
    .catch((err) => console.log(err))
  }, [productId],
  );

  const showMoreReview = () => {
    setMaxResults(maxResults + 2);
    setReviewsOnDisplay(reviews.slice(0, maxResults));
  }

  return (
    <div id="RR-ratings-reviews-ctn">
      <h1>Section for Ratings and Reviews</h1>
      <div id="RR-breakdown-ctn">
        Ratings breakdown
      </div>
      <div id="RR-reviews-ctn">
        <div id="RR-header-sort">
          Header and sort
        </div>
        <ReviewList reviews={reviewsOnDisplay}/>
        <div id="more-menu">
          {maxResults < reviews.length && <button onClick={showMoreReview}>MORE REVIEWS</button>}
          <button>ADD A REVIEW +</button>

        </div>
      </div>
    </div>
  )

}

export default RatingsReviews;