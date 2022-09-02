import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import { someReviews, noReviews } from './ExampleReviews.js';
import please from '../../request.js';
import Form from './Form.jsx';
import RatingBreakdown from './RatingBreakdown.jsx'

//lift axios request for reviews/meta out of Form and into this component

const RatingsReviews = ({ productId, productName }) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsOnDisplay, setReviewsOnDisplay] = useState([]);
  const [maxResults, setMaxResults] = useState(2);

  useEffect(() => {
    please.getReviews(productId)
    .then((data) => {
      let reviews = data.data.results;
      reviews = sortReviews(reviews, 'relevant');
      setReviews(reviews);
      setReviewsOnDisplay(reviews.slice(0, maxResults));
    })
    .catch((err) => console.log(err))
  }, [productId],
  );

  const showMoreReview = () => {
    setMaxResults(maxResults + 2);
    setReviewsOnDisplay(reviews.slice(0, maxResults + 2));
  }

  const addReviewButton = <button>ADD A REVIEW +</button>;

  const sortReviews = (reviews, param) => {
    let sortedReviews = reviews.slice();
    if (param === 'newest') {
      sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (param === 'helpful') {
      sortedReviews.sort((a, b) => b.helpfulness - a.helpfulness);
    } else {
      sortedReviews.sort((a, b) => {
        //time penalty is 1 pt per month, could be fine-tuned with statistical study of data
        const timePenalty = (date) => Math.round((new Date() - new Date(date)) / 1000 / 60 / 60 / 24 / 30);
        let aRelevance = a.helpfulness - timePenalty(a.date);
        let bRelevance = b.helpfulness - timePenalty(b.date);
        return bRelevance - aRelevance;
      })
    }
    return sortedReviews;
  }

  const handleSort = (e) => {
    let param = e.target.value;
    let sortedReviews = sortReviews(reviews, param);
    setReviews(sortedReviews);
    setMaxResults(2);
    setReviewsOnDisplay(sortedReviews.slice(0, 2))
  }

  return (
    <div>
      {reviews.length === 0 ?
      <div>
        <p>Be the first to review this product!</p>
        {addReviewButton}
      </div>
      :
      <div id="RR-ratings-reviews-ctn">
        <RatingBreakdown />
        <div id="RR-reviews-ctn">
          <div id="RR-header-sort">
            <h3>{reviews.length} views, sorted by
              <select id="RR-sort-param" onChange={handleSort}>
                <option value="relevant">Relevant</option>ß
                <option value="helpful">Helpful</option>
                <option value="newest">Newest</option>
              </select>
            </h3>
          </div>
          <div id="RR-reviews-ctn">
            <div id="RR-header-sort">
              <h3>{reviews.length} views, sorted by SORT OPTION</h3>
            </div>
            <ReviewList reviews={reviewsOnDisplay}/>
            <div id="more-menu">
              {maxResults < reviews.length && <button onClick={showMoreReview}>MORE REVIEWS</button>}
              {addReviewButton}
            </div>
          </div>
        </div>
      </div>}
      <Form productName={productName} />
    </div>
  )

}

export default RatingsReviews;