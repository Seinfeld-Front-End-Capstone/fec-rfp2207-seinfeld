import React from 'react';
import Stars from '../helpers/Stars.jsx';
import AvgStarRating from '../helpers/AvgStarRating.jsx';
import _ from 'underscore';
import { BsTriangleFill } from 'react-icons/bs';
import prodCharsRating from '../helpers/prodCharsRating.js';

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
    let value = parseFloat(metaData.characteristics[char].value);
    //formula to position marker using css
    let percentage = ((value - 1) / 4) * 100 - 5;
    results.push(
      <div className="RR-prod-char-breakdown-ctn">
        <div className="RR-prod-char-titles">{char}</div>
        <div className="RR-prod-char-bar">
          <div className="RR-prod-char-marker" style={{marginLeft: `${percentage}%`}}><BsTriangleFill /></div>
        </div>
        <div className="RR-prod-char-descriptions">
          <div>{prodCharsRating[char][1]}</div>
          <div>{prodCharsRating[char][5]}</div>
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
            return <span>{avg.toFixed(1)}</span>
          })}
        </div>
        <div id="RR-star-views-ctn">
          <Stars rating={average} />
          <div>{sumReviews(metaData)} reviews</div>
        </div>
      </div>
      <div id="RR-stars-breakdown-ctn">
        {reviewsByStars(metaData)}
      </div>
      <div id="RR-factors-breakdown-ctn">
        <div>{percentRecommend(metaData)}% recommend</div>
        {prodCharBreakdown(metaData)}
      </div>
    </div>
  )
}

export default RatingBreakdown;