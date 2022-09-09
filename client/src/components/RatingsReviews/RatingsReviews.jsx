import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
// import { someReviews, noReviews } from './ExampleReviews.js';
import please from '../../request.js';
import { MdCancel } from 'react-icons/md';
import Form from './Form/Form.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import { submitRRClick } from '../helpers/trackClick.js';
import stylists from '../../assets/stylists.png';
import { useRef } from 'react';
//lift axios request for reviews/meta out of Form and into this component
//lift axios request for reviews/meta out of Form and into this component


const RatingsReviews = ({ productId, productName }) => {

  const [reviews, setReviews] = useState([]);
  const [sortParam, setSortParam] = useState('relevant')
  const [maxResults, setMaxResults] = useState(2);
  const [formMode, setFormMode] = useState(false);
  const [metaData, setMetaData] = useState(null)
  const [showPhotoModal, setShowPhotoModal] = useState('');
  const [stylistsVisible, setStylistsVisible] = useState(false);

  const myRef = useRef();
  console.log('element is visible', stylistsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('entry', entry);
      setStylistsVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current);
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

  const refreshReviews = () => {
    please.getReviews(productId)
    .then((data) => {
      let reviews = data.data.results;
      //add logic or state to remember what filter/sort the user is in
      setReviews(reviews);
    })
    .catch((err) => console.log(err))
  }

  const showMoreReview = () => {
    setMaxResults(maxResults + 2);
  }

  const toggleForm = () => {
    setFormMode(!formMode);
  }

  const addReviewButton = <button
    onClick={(e) => {
      submitRRClick(e);
      toggleForm();
    }
  }>Add A Review +</button>;

  const handleSort = (e) => {
    setSortParam(e.target.value)
  }

  return (
    <>
      <img ref={myRef} id="stylists-background" src={stylists} />
      <div id="RR-big-ctn">
        {reviews.length === 0
        ?
        <div id="RR-first-review">
          <p>Be the first to review this product!</p>
          {addReviewButton}
        </div>
        :
        <div id="RR-ratings-reviews-ctn">
          {metaData ? <RatingBreakdown metaData={metaData} /> : null}
          <div id="RR-reviews-right-ctn">
            <h3 id="RR-header-sort"> {reviews.length} views, sorted by
              <select id="RR-sort-param" onChange={handleSort} onClick={submitRRClick}>
                <option value="relevant">Relevant</option>ß
                <option value="helpful">Helpful</option>
                <option value="newest">Newest</option>
              </select>
            </h3>
            <ReviewList reviews={reviews} setShowPhotoModal={setShowPhotoModal}/>
            <div id="RR-more-menu">
              {reviews.length === maxResults &&
              <button id="RR-more-reviews"
                onClick={(e) => {
                  submitRRClick(e);
                  showMoreReview();
                }}>More Reviews
              </button>}
              {addReviewButton}
            </div>
          </div>
        </div>}
      </div>
      <div id="RR-form-bg" className={formMode ? 'active' : ''}></div>
      {formMode && <Form
        productName={productName}
        toggleForm={toggleForm}
        productId={productId}
        refreshReviews={() => refreshReviews()}/>}
      {showPhotoModal &&
      <div id="RR-photo-modal">
        <div className="background"></div>
        <div id="RR-photo-modal-inner">
          <MdCancel className="icons" onClick={(e) => {
            submitRRClick(e);
            setShowPhotoModal('')
          }}/>
          <img id="RR-popup-photo" src={showPhotoModal}/>
        </div>
      </div>}
    </>
  )

}

export default RatingsReviews;