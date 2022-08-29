import React from 'react';

const Photos = ({ photo }) => {
  return (
    <div>
      <img key={photo.id} src={photo.url} width="100" heigth="100" alt="Reviewer's photo of product"/>
    </div>
  )
}

export default Photos;