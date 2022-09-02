import React from 'react';
import Stars from '../helpers/Stars.jsx';
import AvgStarRating from '../helpers/AvgStarRating.jsx';
import _ from 'underscore';
import { BsTriangleFill } from 'react-icons/bs';

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
        <div className="RR-top-bar" style={{width: `${percentage}%`}}></div>
      </div>
      <div className="RR-star-counts">
        <div>({count})</div>
      </div>
    </div>
    )
  })
}

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

const prodCharBreakdown = (metaData) => {
  let results = [];
  for (const char in metaData.characteristics) {
    results.push(
      <div className="RR-prod-char-breakdown-ctn">
        <p>{char}</p>
        <div className="RR-prod-char-bar">
          <div className="RR-prod-char-marker"><BsTriangleFill /></div>
        </div>
        <div className="RR-prod-char-titles">
          <p>Too small</p>
          <p>Too large</p>
        </div>
      </div>
    )
  }
  return results;
}

const RatingBreakdown = ({ metaData }) => {
  let average;
  return (
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
      {prodCharBreakdown(metaData)}
    </div>
  )
}

export default RatingBreakdown;