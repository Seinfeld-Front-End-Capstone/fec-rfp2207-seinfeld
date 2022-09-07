import React, { useState } from 'react';
import Stars from '../helpers/Stars.jsx';
import moment from 'moment';
import Photos from './Photos.jsx';
import { FaCheckCircle } from 'react-icons/fa';
import please from '../../request.js';

const ReviewEntry = ({ review, recommended, setShowPhotoModal }) => {
  let { review_id, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary } = review;

  const [voted, setVoted] = useState(false);

  const formattedDate = moment(date).format('ll');

  const voteYes = (e) => {
    please.markReviewAsHelpful(review_id)
    .then(() => {
      setVoted(true);
      e.target.classList.add('bold');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="RR-review-ctn">
      <div className="RR-review-header">
        <div><Stars key={review_id} rating={rating}/></div>
        <div>
          <span>{reviewer_name}  </span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <h3>{summary}</h3>
      <p className="RR-review-body">
        {body.length > 250
        ?
        <>
        {body.slice(0, 250)}...
        <span
        className="underline"
        onClick={(e) => {
          e.currentTarget.parentElement.innerHTML = body;
          }}>show more</span>
        </>
        :
        body}
      </p>
      {recommend ? <p><FaCheckCircle /> I recommend this product</p> : null}
      {response ? <p className="RR-seller-response">Response from seller: {response}</p> : null}
      <p>Helpful? <span
      className='underline'
      onClick={voted ? null : voteYes}
      >Yes ({helpfulness})</span></p>
      <div id="RR-photos-ctn">
        {photos && photos.map(photo => <Photos key={photo.id} photo={photo} setShowPhotoModal={setShowPhotoModal}/>)}
      </div>
    </div>
  )
}

export default ReviewEntry;