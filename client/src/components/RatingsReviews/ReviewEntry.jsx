import React from 'react';
// import star from '/Users/thachdo/Documents/RFP2207/fec-rfp2207-seinfeld/client/src/assets/stars/fullStar.png';

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

  return (
    <div className="review-ctn" style={divStyle}>
      <div className="review-header">
      <img width="20" height="20"/>
        <div>Star rating: {rating}</div>
        <div>
          <span>{reviewer_name}</span>
          <span>{date}</span>
        </div>
      </div>
      <h2>{summary}</h2>
      <p>{body}</p>
      {recommend ? <p>checkIcon I recommend this product</p> : null}
      {response ? <p style={emphasize}>Response from seller: {response}</p> : null}
      <p>Helpful? <span>Yes</span> ({helpfulness}) <span>No</span> (# missing)</p>
    </div>
  )
}

export default ReviewEntry;