import React, { useState, useEffect } from 'react';
import please from '../../../request.js';

const ProdChars = ({ productId }) => {
  const [chars, setChars] = useState([])

  const charRatings = {
    Size: {
      1: 'A size too small',
      5: 'A size too wide'
    },
    Width: {
      1: 'Too narrow',
      5: 'Too wide'
    },
    Comfort: {
      1: 'Uncomfortable',
      5: 'Perfect'
    },
    Quality: {
      1: 'Poor',
      5: 'Perfect'
    },
    Length: {
      1: 'Runs short',
      5: 'Runs long'
    },
    Fit: {
      1: 'Runs tight',
      5: 'Runs long'
    }
  }

  useEffect(() => {
    please.getReviewMeta(productId)
    .then(data => {
      console.log('received review meta data');
      setChars(Object.keys(data.data.characteristics));
    })
    .catch(err => console.log(err));
  }, [productId]);

  return (
    <div>
      {chars.map(char => {
        return <div className="RR-prod-char-rating">
          <p className="RR-prod-char-title">{char}: </p>
          <div className="RR-rating-ctn">
            {[1, 2, 3, 4, 5].map(rating => {
              return <div className="RR-rating-scores">
                  <p>{charRatings[char][rating]}</p>
                  <input type="radio" value={rating} id={rating} name={char}/>
                  <label for={rating}>{rating}</label>
                </div>
            })}
          </div>

        </div>
      })}
    </div>
  )
}

export default ProdChars;