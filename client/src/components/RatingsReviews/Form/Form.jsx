import React, { useState, useEffect } from 'react';
import noStar from '../../../assets/stars/noStar.png';
import fullStar from '../../../assets/stars/fullStar.png';
import UploadedPhotos from './UploadedPhotos.jsx';
import ProdChars from './ProdChars.jsx';
import please from '../../../request.js';
import validateForm from './validateForm.js';


const Form = ({ productName, productId }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [bodyCharCount, setBodyCharCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    please.getReviewMeta(productId)
    .then(data => {
      setChars(Object.keys(data.data.characteristics));
    })
    .catch(err => console.log(err));
  }, [productId]);

  const handleSubmit = (e) => {
    let formData = {
      product_id: productId,
      characteristics: {}
    };
    chars.forEach(char => formData.characteristics[[char]] = null)
    let form = document.getElementById('RR-form');
    const userSubmission = new FormData(form);
    for (const [key, value] of userSubmission) {
      if (chars.includes(key)) {
        formData.characteristics[[key]] = value;
      } else {
        formData[[key]] = value;
      }
    }
    formData.photos = photos;
    let results = validateForm(formData);
    console.log(results);
    if (!results.isValid) {
      alert(results.errorMessages)
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
          <label for={index}><img src={rating >= index ? fullStar : noStar} onMouseOver={() => tempRating(index)}/></label>
        </React.Fragment>
      )
    }
  })

  const countChar = (e) => {
    let charCount = e.target.value ? e.target.value.length : 0;
    setBodyCharCount(charCount);
  }

  const handleImageUpload = () => {
    let image = document.getElementById('upload-photos').files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      let photoUploads = photos.slice();
      photoUploads.push({url: e.target.result});
      setPhotos(photoUploads);
    }
    reader.readAsDataURL(image);
  }

  return (
    <div>
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
          <input type="radio" id="yes" name="recommend" value="yes" checked required />
          <label for="yes">yes</label>
          <input type="radio" id="no" name="recommend" value="no" />
          <label for="no">no</label>
        </div>

        {chars ? <ProdChars chars={chars}/> : null}
        {/* {chars && <ProdChars chars={chars}/>} */}

        <p>Summary:</p>
        <input id="RR-summary" placeholder="Example: Best purchase ever!" maxLength="60" size="50" name="summary" ></input><br/>

        <p>Review:</p>
        <textarea id="RR-body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" name="body" onChange={countChar}
        rows="10" cols="44" required></textarea><br/>
        <p>{bodyCharCount < 50 ? `Minimum required characters left: ${50 - bodyCharCount}` : 'Minimum reached'}</p>

        <label for="upload-photos">Upload photos: </label>
        {photos.length < 5 && <input type="file" id="upload-photos" name="photos" accept="image/*" onChange={handleImageUpload}/>}
        <br/>
        {photos.map(photo => <UploadedPhotos photo={photo}/>)}

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