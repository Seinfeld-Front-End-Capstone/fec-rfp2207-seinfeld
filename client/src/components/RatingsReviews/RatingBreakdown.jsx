import React from 'react';
import Stars from '../helpers/Stars.jsx';
import AvgStarRating from '../helpers/AvgStarRating.jsx';
import _ from 'underscore';

//info needed
//average rating from reviews/meta use Quinn's logic
//all the reviews for this product
//review meta data (for prod-chars) from reviews/meta

const reviewsByStars = (metaData) => {
  //lift this up as state?
  let total = sumReviews(metaData);
  return [5, 4, 3, 2, 1].map(rating => {
    let count = metaData.ratings[rating];
    let percentage = (count / total) * 100;
    return (
    <div className="RR-reviews-by-star-ctn">
      <div>{rating} stars</div>
      <div className="RR-bar-graph">
        <div className="RR-top-bar" style={{width: `${count}%`}}></div>
      </div>
      <div className="RR-star-counts">
        <div>({count})</div>
      </div>
    </div>
    )
  })
}

const charBreakdowns = [
//iterate, get average and generate
  <div className="RR-prod-char-breakdown-ctn">
    <p>size</p>
    <p>scale</p>
    <p>prod-char titles</p>
  </div>
]

const sumReviews = (metaData) => {
  let total = 0;
  for (const rating in metaData.ratings) {
    total += parseInt(metaData.ratings[rating]);
  }
  return total;
}

const percentRecommend = (metaData) => {
  let percent = parseInt(metaData.recommended.true) / ( parseInt(metaData.recommended.true) + parseInt(metaData.recommended.false))
  return Math.round(percent * 100);
}

const RatingBreakdown = ({ metaData }) => {
  let average;
  return (
    metaData
    ?
    <div id="RR-rating-breakdown-ctn">
      <div id="RR-rating-summary-ctn">
        <div id="RR-avg-rating">
          {AvgStarRating(metaData.ratings, (avg) => {
            average = avg;
            return <h3>{avg.toFixed(1)}</h3>
          })}
        </div>
        <div id="RR-star-views-ctn">
          <Stars rating={average} />
          <p>{sumReviews(metaData)} reviews</p>
        </div>
      </div>
      <div id="RR-factors-breakdown-ctn">
        {reviewsByStars(metaData)}
        <p>{percentRecommend(metaData)}% recommend</p>
        {/* iterate through prod-chars and generate */}
      </div>
      {charBreakdowns}
    </div>
    :
    null
  )
}

export default RatingBreakdown;