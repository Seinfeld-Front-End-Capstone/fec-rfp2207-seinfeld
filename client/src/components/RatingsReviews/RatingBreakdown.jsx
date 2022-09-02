import React from 'react';
import Stars from '../helpers/Stars.jsx';
import AvgStarRating from '../helpers/AvgStarRating.jsx';

//info needed
//average rating from reviews/meta use Quinn's logic
//all the reviews for this product
//review meta data (for prod-chars) from reviews/meta

const reviewsByStars =
//iterate, filter and generate
    [<div className="RR-reviews-by-star-ctn">
      <div>5 stars</div>
      <div>bar graph</div>
      <div># reviews</div>
    </div>];

const charBreakdowns = [
//iterate, get average and generate
  <div className="RR-prod-char-breakdown-ctn">
    <p>size</p>
    <p>scale</p>
    <p>prod-char titles</p>
  </div>
]

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
          <p># of reviews</p>
        </div>
        <div id="RR-factors-breakdown-ctn">
          {reviewsByStars}
          <p>some % recommend</p>
          {/* iterate through prod-chars and generate */}
        </div>
        {charBreakdowns}
      </div>

    </div>
  )
}

export default RatingBreakdown;