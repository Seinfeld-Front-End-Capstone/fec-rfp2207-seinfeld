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
      {/* there's a lot of redundant logic here, this could be refactored later, maybe generate it with a for loop */}
      <div id="RR-overall-rating">
        <p>Overall Rating:</p><span aria-label="required">* </span><br/>
        {[null, 'Poor', 'Fair', 'Average', 'Good', 'Great'].map((element, index) => {
          if (element) {
            return(
              <div>
                <input type="radio" id={index} name="rating" value={index} required onClick={changeRating} />
                <label for={index}><img src={rating >= index ? fullStar : noStar} onMouseOver={() => tempRating(index)}/></label><span>{element}</span>
              </div>
            )
          }
        })}
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