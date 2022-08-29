import React from 'react';

const Photos = ({ photo }) => {
  return (
    <div>
      <img className="RR-review-photos" key={photo.id} src={photo.url} alt="Reviewer's photo of product"/>
    </div>
  )
}

export default Photos;