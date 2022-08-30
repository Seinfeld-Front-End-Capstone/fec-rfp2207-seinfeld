import React, { useState } from 'react';
import noStar from '../../assets/stars/noStar.png';
import fullStar from '../../assets/stars/fullStar.png';


const Form = ({ productName }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [bodyCharCount, setBodyCharCount] = useState(0);

  const requiredTag = <span aria-label="required">*</span>;

  const changeRating = (e) => {
    setRating(e.target.value);
    setRated(true);
  };
  const tempRating = (rating) => {
    rated ? null : setRating(rating);
  }

  const ratings = [null, 'Poor', 'Fair', 'Average', 'Good', 'Great'];
  const starRatings = ratings.map((element, index) => {
    if (element) {
      return(
        <span key={index}>
          <input type="radio" id={index} name="rating" value={index} required onClick={changeRating} />
          <label for={index}><img src={rating >= index ? fullStar : noStar} onMouseOver={() => tempRating(index)}/></label>
        </span>
      )
    }
  })

  const countChar = () => {
    let charCount = document.getElementById('RR-body') ? document.getElementById('RR-body').value.length : 0;
    setBodyCharCount(charCount);
  }
  //refactor repetitive tags like required
  return (
    <form>
      <h3>Write your review</h3>
      <p>About the {productName}</p>
      <div id="RR-overall-rating">
        <p>Overall Rating: {requiredTag}</p>
        <br/>
        {starRatings}{rated && <span>{ratings[rating]}</span>}
      </div>
      <div id="RR-form-recommend">Do you recommend this product? {requiredTag}<br/>
        <input type="radio" id="yes" name="recommend" value="yes" checked required />
        <label for="yes">yes</label>
        <input type="radio" id="no" name="recommend" value="no" />
        <label for="no">no</label>
      </div>
      <input id="RR-summary" placeholder="Example: Best purchase ever!" maxLength="60"></input><br/>
      <textarea id="RR-body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" onChange={countChar} required></textarea><br/>
      <p>{bodyCharCount < 50 ? `Minimum required characters left: ${50 - bodyCharCount}` : 'Minimum reached'}</p>
      <p>Upload your photos</p>
      <p>What is your nickname:  {requiredTag}</p>
      <input id="RR-nickname" placeholder="Example: jackson11!" maxLength="60" required />
      <p>For privacy reasons, do not use your full name or email address</p>
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form;