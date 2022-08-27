import React from 'react';
import request from '../../request.js';

// AR = 1*a+2*b+3*c+4*d+5*e/(R)

// get star rating info from meta data,
  // use above method to find average


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
   // *** round down 2 decimal to .25, .50, or .75 *** \\

  return callback(average);
}


export default AvgStarRating;