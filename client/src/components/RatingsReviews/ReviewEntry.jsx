import React from 'react';
import Stars from '../helpers/Stars.jsx';
import moment from 'moment';
import Photos from './Photos.jsx';

const ReviewEntry = ({ review }) => {
  let { body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary } = review;

//for dev and testing purposes only, will migrate into css file
const divStyle = {
borderStyle: 'solid'
}
const emphasize = {
  backgroundColor: 'seashell',
  fontWeight: 'bold'
}

const formattedDate = moment(date).format('ll');

  return (
    <div className="review-ctn" style={divStyle}>
      <div className="review-header">
        <div><Stars rating={rating}/></div>
        <div>
          <span>{reviewer_name}  </span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <h2>{summary}</h2>
      <p>{body}</p>
      {recommend ? <p>checkIcon I recommend this product</p> : null}
      {response ? <p style={emphasize}>Response from seller: {response}</p> : null}
      <p>Helpful? <span>Yes</span> ({helpfulness}) <span>No</span> (# missing)</p>
      <div className="RR-photos">
        {photos && photos.map(photo => <Photos photo={photo}/>)}
      </div>
    </div>
  )
}

export default ReviewEntry;