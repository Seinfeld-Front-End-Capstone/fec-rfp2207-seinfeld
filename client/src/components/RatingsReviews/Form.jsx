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

  let ratings = [null, 'Poor', 'Fair', 'Average', 'Good', 'Great'];
  let starRatings = ratings.map((element, index) => {
    if (element) {
      return(
        <span key={index}>
          <input type="radio" id={index} name="rating" value={index} required onClick={changeRating} />
          <label for={index}><img src={rating >= index ? fullStar : noStar} onMouseOver={() => tempRating(index)}/></label>
        </span>
      )
    }
  })

  return (
    <form>
      <h3>Write your review</h3>
      <p>About the {productName}</p>
      <div id="RR-overall-rating">
        <p>Overall Rating:<span aria-label="required">*</span></p>
        <br/>
        {starRatings}{rated && <span>{ratings[rating]}</span>}
      </div>
      <div id="RR-form-recommend">Do you recommend this product?<span aria-label="required">*</span><br/>
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