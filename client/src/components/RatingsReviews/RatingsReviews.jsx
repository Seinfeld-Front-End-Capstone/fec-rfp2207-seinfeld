import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
// import { someReviews, noReviews } from './ExampleReviews.js';
import please from '../../request.js';
import Form from './Form.jsx';
import RatingBreakdown from './RatingBreakdown.jsx'

//lift axios request for reviews/meta out of Form and into this component

//lift axios request for reviews/meta out of Form and into this component

const RatingsReviews = ({ productId, productName }) => {

  const [reviews, setReviews] = useState([]);
  const [sortParam, setSortParam] = useState('relevant')
  const [maxResults, setMaxResults] = useState(2);
  const [metaData, setMetaData] = useState(null)

  useEffect(() => {
    please.getReviews(productId, 1, maxResults, sortParam)
    .then((data) => {
      let reviews = data.data.results;
      setReviews(reviews);
    })
    .catch((err) => console.log(err));

    please.getReviewMeta(productId)
    .then(data => setMetaData(data.data))
    .catch(err => console.log(err));
  }, [productId, maxResults, sortParam],
  );

  const showMoreReview = () => {
    setMaxResults(maxResults + 2);
  }

  const addReviewButton = <button>ADD A REVIEW +</button>;

  const handleSort = (e) => {
    setSortParam(e.target.value)
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
        {metaData ? <RatingBreakdown metaData={metaData} /> : null}
        <div id="RR-reviews-ctn">
          <div id="RR-reviews-ctn">
            <h3 id="RR-header-sort"> {reviews.length} views, sorted by
              <select id="RR-sort-param" onChange={handleSort}>
                <option value="relevant">Relevant</option>ß
                <option value="helpful">Helpful</option>
                <option value="newest">Newest</option>
              </select>
            </h3>
            <ReviewList reviews={reviews}/>
            <div id="more-menu">
              {reviews.length === maxResults && <button onClick={showMoreReview}>MORE REVIEWS</button>}
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