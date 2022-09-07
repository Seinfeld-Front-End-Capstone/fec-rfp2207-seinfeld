import React from 'react';

const Photos = ({ photo, setShowPhotoModal }) => {
  return (
    <div>
      <img className="RR-review-photos" src={photo.url} alt="Reviewer's photo of product" onClick={() => {
        setShowPhotoModal(photo.url);
      }} />
    </div>
  )
}

export default Photos;