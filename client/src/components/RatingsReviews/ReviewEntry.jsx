import React from 'react';
import Stars from '../helpers/Stars.jsx';
import moment from 'moment';
import Photos from './Photos.jsx';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewEntry = ({ review, recommended }) => {
  let { review_id, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary } = review;

//for dev and testing purposes only, will migrate into css file

const formattedDate = moment(date).format('ll');

  return (
    <div className="RR-review-ctn">
      <div className="RR-review-header">
        <div><Stars key={review_id} rating={rating}/></div>
        <div>
          <span>{reviewer_name}  </span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <h2>{summary}</h2>
      <p>{body}</p>
      {recommend ? <p><FaCheckCircle /> I recommend this product</p> : null}
      {response ? <p style={emphasize}>Response from seller: {response}</p> : null}
      <p>Helpful? <span>Yes</span> ({helpfulness})</p>
      <div id="RR-photos-ctn">
        {photos && photos.map(photo => <Photos key={photo.id} photo={photo}/>)}
      </div>
    </div>
  )
}

export default ReviewEntry;