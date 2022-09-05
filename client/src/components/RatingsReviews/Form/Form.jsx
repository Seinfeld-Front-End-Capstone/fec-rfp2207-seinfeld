import React, { useState, useEffect } from 'react';
import ProdChars from './ProdChars.jsx';
import please from '../../../request.js';
import { validateForm, formatForm } from './processForm.js';
import _ from 'underscore';
import widget from '../../helpers/widget.js';

const Form = ({ productName, productId, toggleForm, refreshReviews }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [bodyCharCount, setBodyCharCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [chars, setChars] = useState([]);
  const [myWidget, setMyWidget] = useState(null);
  //could refactor to store as one state?
  const [cancelBtnActive, setCancelBtnActive] = useState(false);
  const [submitBtnActive, setSubmitBtnActive] = useState(false);
  const [uploadBtnActive, setUploadBtnActive] = useState(false);

  useEffect(() => {
    please.getReviewMeta(productId)
    .then(data => setChars(data.data.characteristics))
    .catch(err => console.log(err));

    setMyWidget(widget(
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('Done! Here is the image info: ', result.info);
          setPhotos(photos => [...photos, {
            thumbnail: result.info.thumbnail_url,
            url: result.info.secure_url
          }])
        }
      }))
  }, [productId]);

  const handleSubmit = (e) => {
    let formData = {
      product_id: productId,
      characteristics: {}
    };
    let charsTitles = Object.keys(chars);
    charsTitles.forEach(char => formData.characteristics[[char]] = null)
    let form = document.getElementById('RR-form');
    const userSubmission = new FormData(form);
    for (const [key, value] of userSubmission) {
      if (charsTitles.includes(key)) {
        formData.characteristics[[key]] = value;
      } else {
        formData[[key]] = value;
      }
    }
    formData.photos = _.map(photos, photo => photo.url);
    let results = validateForm(formData);
    if (!results.isValid) {
      alert(results.errorMessages)
    } else {
      formData = formatForm(formData, chars);
      console.log('formatted form', formData)
      please.addReview(formData)
      .then(() => {
        refreshReviews();
        return;
      })
      .then(() => {
        console.log('exiting form')
        toggleForm();
      })
      .catch(err => console.log(err));
    }
  }

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
        <span key={index} className="RR-rate-star">
          <input type="radio" id={index} name="rating" value={index} required onClick={changeRating} />
          <label htmlFor={index} className="Stars" onMouseEnter={() => tempRating(index)} onMouseLeave={() => tempRating(0)} style={{'--percent': rating >= index ? '100%' : '0%'}}>★</label>
        </span>
      )
    }
  })

  const countChar = (e) => {
    let charCount = e.target.value ? e.target.value.length : 0;
    setBodyCharCount(charCount);
  }

  return (
    <div id="RR-form-ctn">
      <div id="RR-form">
        <div id="RR-form-menu">
          <span>Write your review</span>
          <span>About the {productName}</span>
          <input type="button" value="submit" onClick={handleSubmit} onMouseEnter={() => setSubmitBtnActive(true)} onMouseLeave={() => setSubmitBtnActive(false)} className={submitBtnActive ? 'active' : ''} />
          <button id="RR-form-cancel" onClick={toggleForm} onMouseEnter={() => setCancelBtnActive(true)} onMouseLeave={() => setCancelBtnActive(false)} className={cancelBtnActive ? 'active' : ''}>cancel</button>
        </div>
        <form>
          <div id="RR-overall-rating" className="RR-form-fields">
            <div>Overall Rating: {requiredTag}</div>
            <div>{starRatings}</div>
            {rated && <div>{ratings[rating]}</div>}
          </div>

          <div id="RR-form-recommend" className="RR-form-fields">Do you recommend this product? {requiredTag}<br/>
            <input type="radio" id="yes" name="recommend" value="yes" defaultChecked required />
            <label htmlFor="yes">yes</label>
            <input type="radio" id="no" name="recommend" value="no" />
            <label htmlFor="no">no</label>
          </div>

          {<ProdChars chars={Object.keys(chars)} />}

          <div className="RR-form-fields textbox">
            <div>Summary:</div>
            <input id="RR-summary" placeholder="Example: Best purchase ever!" maxLength="60" size="50" name="summary" ></input><br/>
          </div>

          <div className="RR-form-fields textbox">
            <div>Review: {requiredTag}</div>
            <textarea id="RR-body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" name="body" onChange={countChar}
            rows="10" cols="44" required></textarea><br/>
            <div>{bodyCharCount < 50 ? `Minimum required characters left: ${50 - bodyCharCount}` : 'Minimum reached'}</div>
          </div>

          <div className="RR-form-fields">
            {photos.length <5 && <button onClick={() =>myWidget.open()} onMouseEnter={() => setUploadBtnActive(true)} onMouseLeave={() => setUploadBtnActive(false)} className={uploadBtnActive ? 'active' : ''}>upload photos</button>}
            <div id="RR-photo-uploads">
              {photos.map(photo => <img src={photo.thumbnail} alt="Your uploaded photo of the product"/>)}
            </div>
          </div>

          <div className="RR-form-fields textbox">
            <div>What is your nickname:  {requiredTag}</div>
            <input id="RR-nickname" placeholder="Example: jackson11!" maxLength="60" name="name" required />
            <div className="RR-disclaimer">For privacy reasons, do not use your full name or email address</div>
          </div>

          <div className="RR-form-fields textbox">
            <div>Your Email: {requiredTag}</div>
            <span><input placeholder="Example: jackson11@email.com" maxLength="60" name="email"/></span>
            <div className="RR-disclaimer">For authentication reasons, you will not be emailed</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;