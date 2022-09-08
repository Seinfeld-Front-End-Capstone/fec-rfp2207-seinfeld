import React from 'react';
import { submitRRClick } from '../helpers/trackClick.js';

const Photos = ({ photo, setShowPhotoModal }) => {
  return (
    <div>
      <img className="RR-review-photos" src={photo.url} alt="Reviewer's photo of product" onClick={(e) => {
        setShowPhotoModal(photo.url);
        submitRRClick(e);
      }} />
    </div>
  )
}

export default Photos;