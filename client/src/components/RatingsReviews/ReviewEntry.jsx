import React from 'react';
import Stars from '../helpers/Stars.jsx';
import moment from 'moment';
import Photos from './Photos.jsx';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewEntry = ({ review, recommended }) => {
  let { review_id, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary } = review;

const formattedDate = moment(date).format('ll');
  let newBody = body.slice(0, 25);
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
      <p id="RR-review-body">
        {body.length > 25
        ?
        <>
        {newBody}...
        <span
        className="underline"
        onClick={(e) => {
          console.log('new body', newBody);
          console.log('body', body)
          // e.currentTarget.classList.add('hide');
          // e.currentTarget.previousElementSibling.innerHTML = body;
          e.currentTarget.parentElement.innerHTML = body;
          }}>show more</span>
        </>
        :
        body}
      </p>
      {recommend ? <p><FaCheckCircle /> I recommend this product</p> : null}
      {response ? <p className="RR-seller-response">Response from seller: {response}</p> : null}
      <p>Helpful? <span>Yes</span> ({helpfulness})</p>
      <div id="RR-photos-ctn">
        {photos && photos.map(photo => <Photos key={photo.id} photo={photo}/>)}
      </div>
    </div>
  )
}

export default ReviewEntry;