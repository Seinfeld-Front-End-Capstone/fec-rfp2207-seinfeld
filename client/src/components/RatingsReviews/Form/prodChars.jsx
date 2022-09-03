import React from 'react';

const ProdChars = ({ chars }) => {

  const charRatings = {
    Size: {
      1: 'A size too small',
      2: '1/2 a size too small',
      3: 'Perfect',
      4: '1/2 a size too big',
      5: 'A size too wide'
    },
    Width: {
      1: 'Too narrow',
      2: 'Slightly too narrow',
      3: 'Perfect',
      4: 'Slightly Wide',
      5: 'Too wide'
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    Quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    Length: {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    Fit: {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  }

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
                  <label htmlFor={rating}>{rating}</label>
                </div>
            })}
          </div>

        </div>
      })}
    </div>
  )
}

export default ProdChars;