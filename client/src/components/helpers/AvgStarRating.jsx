import React from 'react';
import request from '../../request.js';

// AR = 1*a+2*b+3*c+4*d+5*e/(R)

// get star rating info from meta data,
  // use above method to find average


const AvgStarRating = ( ratingsMeta, callback ) => {
  var average = 0;
  var count = 0;
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;

  for (let key in ratingsMeta) {
    var star = ratingsMeta[key];
    if (key === 1) {
      one += star * 1;
      count += star;
    } else if (key === 2) {
      two += star * 2;
      count += star;
    } else if (key === 3) {
      three += star * 3;
      count += star;
    } else if (key === 4) {
      four += star * 4;
      count += star;
    } else if (key === 5) {
      five += star * 5;
      count += star;
    }
  };

  average = one + two + three + four + five / count;

  return callback(average);
}


export default AvgStarRating;