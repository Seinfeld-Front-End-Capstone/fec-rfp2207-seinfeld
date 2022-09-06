import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
// import { someReviews, noReviews } from './ExampleReviews.js';
import please from '../../request.js';
import Form from './Form/Form.jsx';
import RatingBreakdown from './RatingBreakdown.jsx'
//lift axios request for reviews/meta out of Form and into this component
//lift axios request for reviews/meta out of Form and into this component


const RatingsReviews = ({ productId, productName }) => {

  const [reviews, setReviews] = useState([]);
  const [sortParam, setSortParam] = useState('relevant')
  const [maxResults, setMaxResults] = useState(2);
  const [formMode, setFormMode] = useState(false);
  const [metaData, setMetaData] = useState(null)

  useEffect(() => {
    please.getReviews(productId, 1, maxResults, sortParam)
    .then((data) => {
      let reviews = data.data.results;
      // setReviews(reviews);
      setReviews([]);
    })
    .catch((err) => console.log(err));

    please.getReviewMeta(productId)
    .then(data => setMetaData(data.data))
    .catch(err => console.log(err));
  }, [productId, maxResults, sortParam],
  );

  const refreshReviews = () => {
    please.getReviews(productId)
    .then((data) => {
      let reviews = data.data.results;
      //add logic or state to remember what filter/sort the user is in
      // setReviews(reviews);
      setReviews([]);
    })
    .catch((err) => console.log(err))
  }

  const showMoreReview = () => {
    setMaxResults(maxResults + 2);
  }

  const toggleForm = () => {
    setFormMode(!formMode);
  }

  const addReviewButton = <button>ADD A REVIEW +</button>;

  const handleSort = (e) => {
    setSortParam(e.target.value)
  }

  return (
    <>
      <div id="RR-big-ctn">
        {reviews.length === 0
        ?
        <div>
          <p>Be the first to review this product!</p>
          {addReviewButton}
        </div>
        :
        <div id="RR-ratings-reviews-ctn">
          {metaData ? <RatingBreakdown metaData={metaData} /> : null}
          <div id="RR-reviews-right-ctn">
            <h3 id="RR-header-sort"> {reviews.length} views, sorted by
              <select id="RR-sort-param" onChange={handleSort}>
                <option value="relevant">Relevant</option>ß
                <option value="helpful">Helpful</option>
                <option value="newest">Newest</option>
              </select>
            </h3>
            <ReviewList reviews={reviews}/>
            <div id="RR-more-menu">
              {reviews.length === maxResults &&
              <button
                onClick={showMoreReview}>MORE REVIEWS
              </button>}
              {addReviewButton}
            </div>
          </div>
        </div>}
      </div>
      <div id="RR-form-bg" className={formMode ? 'active' : ''}></div>
      {formMode &&
      <Form
        productName={productName}
        toggleForm={toggleForm}
        productId={productId}
        refreshReviews={() => refreshReviews()}/>}
    </>
  )

}

export default RatingsReviews;