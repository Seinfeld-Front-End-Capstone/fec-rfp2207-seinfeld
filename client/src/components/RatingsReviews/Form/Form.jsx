import React, { useState, useEffect } from 'react';
import noStar from '../../../assets/stars/noStar.png';
import fullStar from '../../../assets/stars/fullStar.png';
import ProdChars from './ProdChars.jsx';
import please from '../../../request.js';
import { validateForm, formatForm } from './processForm.js';
import _ from 'underscore';

// TODO:
// remove previous photo upload logic
// create a new state to store cloudinary urls to be send to the server


const Form = ({ productName, productId, toggleForm, refreshReviews }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [bodyCharCount, setBodyCharCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    please.getReviewMeta(productId)
    .then(data => setChars(data.data.characteristics))
    .catch(err => console.log(err));
  }, [productId]);

  const myWidget = cloudinary.createUploadWidget({
    cloudName: 'seinfeldtd',
    uploadPreset: 'seinfeldpreset'
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        let newPhotos = photos.slice();
        newPhotos.push({
          thumbnail: result.info.thumbnail_url,
          url: result.info.secure_url
        });
        setPhotos(newPhotos);
        console.log(photos);
      }
  })

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
        <React.Fragment key={index}>
          <input type="radio" id={index} name="rating" value={index} required onClick={changeRating} />
          <label htmlFor={index}><img src={rating >= index ? fullStar : noStar} onMouseEnter={() => tempRating(index)} onMouseLeave={() => tempRating(0)}/></label>
        </React.Fragment>
      )
    }
  })

  const countChar = (e) => {
    let charCount = e.target.value ? e.target.value.length : 0;
    setBodyCharCount(charCount);
  }

  return (
    <div id="RR-form-ctn">
      <div id="RR-form-bg"></div>
      <form id="RR-form">
        <h3>Write your review</h3>
        <p>About the {productName}</p>

        <div id="RR-overall-rating">
          <p>Overall Rating: {requiredTag}</p>
          <div className="RR-rate-star">
            {starRatings}{rated && <span>{ratings[rating]}</span>}
          </div>
        </div>

        <div id="RR-form-recommend">Do you recommend this product? {requiredTag}<br/>
          <input type="radio" id="yes" name="recommend" value="yes" defaultChecked required />
          <label htmlFor="yes">yes</label>
          <input type="radio" id="no" name="recommend" value="no" />
          <label htmlFor="no">no</label>
        </div>

        {<ProdChars chars={Object.keys(chars)} />}

        <p>Summary:</p>
        <input id="RR-summary" placeholder="Example: Best purchase ever!" maxLength="60" size="50" name="summary" ></input><br/>

        <p>Review:</p>
        <textarea id="RR-body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" name="body" onChange={countChar}
        rows="10" cols="44" required></textarea><br/>
        <p>{bodyCharCount < 50 ? `Minimum required characters left: ${50 - bodyCharCount}` : 'Minimum reached'}</p>

        {photos.length < 5 && <button onClick={() => myWidget.open()}>Upload photos</button>}
        {photos.length > 0 && _.map(photos, photo => <img className="RR-uploaded-photos" src={photo.thumbnail} alt="Your uploaded photo of the product"/>)}

        <p>What is your nickname:  {requiredTag}</p>
        <input id="RR-nickname" placeholder="Example: jackson11!" maxLength="60" name="name" required />
        <p>For privacy reasons, do not use your full name or email address</p>

        <p>Your Email: {requiredTag}</p>
        <span><input placeholder="Example: jackson11@email.com" maxLength="60" name="email"/></span>
        <p>For authentication reasons, you will not be emailed</p>

        <input type="button" value="submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default Form;