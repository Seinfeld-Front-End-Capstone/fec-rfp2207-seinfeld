import React from 'react';
import request from '../../request.js';


const AvgStarRating = ( ratingsMeta, callback ) => {
  var average = 0;
  var count = 0;
  var stars = 0;

  for (var key in ratingsMeta) {
    var star = ratingsMeta[key];
    stars += Number(star) * key;
    count += Number(star);
  };

  average = stars / count;

  return callback(average);
}


export default AvgStarRating;