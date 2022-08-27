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

   // *** round down 2 decimal to .25, .50, or .75 -- actually, it looks like Thach's Stars func does it for me. Ask him about it tomorrow! *** \\

  return callback(average);
}


export default AvgStarRating;