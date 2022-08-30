import React, { useState } from 'react';
import noStar from '../../../assets/stars/noStar.png';
import fullStar from '../../../assets/stars/fullStar.png';
import UploadedPhotos from './UploadedPhotos.jsx';
import ProdChars from './ProdChars.jsx'


const Form = ({ productName, productId }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  const [bodyCharCount, setBodyCharCount] = useState(0);
  const [photos, setPhotos] = useState([]);

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

      {/* WORKING ON THIS NOW */}
      <ProdChars productId={productId}/>

      <input id="RR-summary" placeholder="Example: Best purchase ever!" maxLength="60"></input><br/>
      <textarea id="RR-body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" onChange={countChar} required></textarea><br/>
      <p>{bodyCharCount < 50 ? `Minimum required characters left: ${50 - bodyCharCount}` : 'Minimum reached'}</p>

      <label for="upload-photos">Upload photos: </label>
      {photos.length < 5 && <input type="file" id="upload-photos" name="upload-photos" accept="image/*" onChange={handleImageUpload}/>}
      <br/>
      {photos.map(photo => <UploadedPhotos photo={photo}/>)}

      <p>What is your nickname:  {requiredTag}</p>
      <input id="RR-nickname" placeholder="Example: jackson11!" maxLength="60" required />
      <p>For privacy reasons, do not use your full name or email address</p>

      <p>Your Email: {requiredTag}</p>
      <span><input placeholder="Example: jackson11@email.com" maxLength="60"/></span>
      <p>For authentication reasons, you will not be emailed</p>

      <input type="submit" value="submit" />
    </form>
  )
}

export default Form;