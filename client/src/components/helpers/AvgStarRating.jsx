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

  for (var key in ratingsMeta) {
    var star = ratingsMeta[key];
    console.log('key:', key,'stars:', star);
    if (key === 1) {
      one += (star * 1);
      count += star;
    } else if (key === 2) {
      two += (star * 2);
      count += star;
    } else if (key === 3) {
      three += (star * 3);
      count += star;
    } else if (key === 4) {
      four += (star * 4);
      count += star;
    } else if (key === 5) {
      five += (star * 5);
      console.log('FIVE:', five);
      count += star;
    }
  };

  average = one + two + three + four + five / count;
  console.log("ratingsMeta:", ratingsMeta);
  console.log('1:', one, '2:', two, '3:', three, '4:', four, '5:', five);
  console.log('average:', average);

  return callback(average);
}


export default AvgStarRating;