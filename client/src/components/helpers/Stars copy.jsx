// import React from 'react';
// import fullStar from '../../../src/assets/stars/fullStar.png';
// import threeQuartersStar from '../../../src/assets/stars/threeQuartersStar.png';
// import halfStar from '../../../src/assets/stars/halfStar.png';
// import quarterStar from '../../../src/assets/stars/quarterStar.png';
// import noStar from '../../../src/assets/stars/noStar.png';

// //rating should be passed in as a float or int (not rounded)
// const Stars = ({ rating }) => {
//   const maxStars = 5;
//   let starsArray = [];
//   let fullStarCount = Math.floor(rating);
//   let remainder = rating % 1;
//   let partialCount = (Math.round(remainder * 4) / 4).toFixed(2);
//   let partialStars = {
//     '0.00' : noStar,
//     '0.25' : quarterStar,
//     '0.50' : halfStar,
//     '0.75' : threeQuartersStar,
//     '1.00' : fullStar
//   }

//   for (let i = 0; i < fullStarCount; i++) {
//     starsArray.push(<img key={starsArray.length} src={fullStar} width="20" height="20"/>)
//   }
//   if(partialCount !== '0.00') {
//     starsArray.push(<img key={starsArray.length} src={partialStars[partialCount]} width="20" height="20"/>)
//   }
//   while (starsArray.length < maxStars) {
//     starsArray.push(<img key={starsArray.length} src={noStar} width="20" height="20"/>)
//   }

//   return (
//     <span>
//       {starsArray}
//     </span>
//   )
// }

// export default Stars;