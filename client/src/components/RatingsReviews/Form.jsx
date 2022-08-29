import React, { useState } from 'react';
import noStar from '../../assets/stars/noStar.png';
import fullStar from '../../assets/stars/fullStar.png';


const Form = ({ productName }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const changeRating = (e) => {
    setRating(e.target.value);
    setRated(true);
  };
  const tempRating = (rating) => {
    rated ? null : setRating(rating);
  }
  return (
    <form>
      <h3>Write your review</h3>
      <p>About the {productName}</p>
      <div id="RR-overall-rating">
        <p>Overall Rating:</p><span aria-label="required">* </span><br/>
        <input type="radio" id="1" name="rating" value="1" required onClick={changeRating} />
        <label for="1"><img src={rating >=1 ? fullStar : noStar} onMouseOver={() => tempRating(1)}/></label>
        <input type="radio" id="2" name="rating" value="2" onClick={changeRating} />
        <label for="2"><img src={rating >=2 ? fullStar : noStar} onMouseOver={() => tempRating(2)}/></label>
        <input type="radio" id="3" name="rating" value="3" onClick={changeRating} />
        <label for="3"><img src={rating >=3 ? fullStar : noStar} onMouseOver={() => tempRating(3)}/></label>
        <input type="radio" id="4" name="rating" value="4" onClick={changeRating} />
        <label for="4"><img src={rating >=4 ? fullStar : noStar} onMouseOver={() => tempRating(4)} /></label>
        <input type="radio" id="5" name="rating" value="5" onClick={changeRating} />
        <label for="5"><img src={rating >=5 ? fullStar : noStar} onMouseOver={() => tempRating(5)}/></label>
      </div>
      <div id="RR-form-recommend">Do you recommend this product?<span aria-label="required">* </span><br/>
        <input type="radio" id="yes" name="recommend" value="yes" checked required />
        <label for="yes">yes</label>
        <input type="radio" id="no" name="recommend" value="no" />
        <label for="no">no</label>
      </div>
      <input type="submit"  value="submit" />

    </form>
  )
}

export default Form;