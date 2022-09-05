import React from 'react';
import charRatings from '../../helpers/prodCharsRating.js';

const ProdChars = ({ chars }) => {
  return (
    <div>
      {chars.map(char => {
        return <div key={char} className="RR-prod-char-rating RR-form-fields">
          <span className="RR-prod-char-title">{char}: </span>
          <div className="RR-rating-ctn">
            {[1, 2, 3, 4, 5].map(rating => {
              return <div key={rating} className="RR-rating-scores">
                  <div>{charRatings[char][rating]}</div>
                  <input type="radio" value={rating} id={`${char}${rating}`} name={char}/>
                  <label htmlFor={`${char}${rating}`}>{rating}</label>
                </div>
            })}
          </div>

        </div>
      })}
    </div>
  )
}

export default ProdChars;