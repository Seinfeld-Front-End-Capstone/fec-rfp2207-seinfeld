import React, { useState } from 'react';

// Idea for refactor: augment existing Photos.jsx to include the cancel button
//come back and add functionality to delete these
const UploadedPhotos = ({ photo }) => {
  return (
    <React.Fragment>
      <img className="RR-uploaded-photos" src={photo.url} alt="Your uploaded photo of product"/>
    </React.Fragment>
  )
}

export default UploadedPhotos;