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
    setReviewsOnDisplay(reviews.slice(0, maxResults + 2));
  }

  const sortReviewBy = (param) => {
    let sortedReviews = reviews.slice();
    if (param === 'newest') {
      console.log('sorting by newest')
      sortedReviews.sort((a, b) =>
      {return new Date(b.date) - new Date(a.date);
        // a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      })
    } else if (param = 'helpful') {
      //only counting yes's for now until I find the count for nos
      console.log('sorting by helpfulness')
      sortedReviews.sort((a, b) => b.helpfulness - a.helpfulness)

    } else {
      //relevant by default
    }
    console.log(sortedReviews);
    // debugger;
    setReviews(sortedReviews);
    setMaxResults(2);
    setReviewsOnDisplay(sortedReviews.slice(0, 2))
  }

  return (
    <div id="RR-ratings-reviews-ctn">
      <div id="RR-breakdown-ctn">
        <h1>Section for Ratings and Reviews</h1>
        <div>Rating and Stars</div>
        <p>Percentage of recommends</p>
        <div>Bar graph of reviews</div>
        <div>breakdown factors</div>
      </div>
      <div id="RR-reviews-ctn">
        <div id="RR-header-sort">
          <h3>{reviews.length} views, sorted by
            <select id="RR-sort-param" onChange={(e) => sortReviewBy(e.target.value)}>
              <option value="relevant">Relevant</option>ß
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </h3>
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