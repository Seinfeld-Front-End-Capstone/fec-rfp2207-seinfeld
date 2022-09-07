import React from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {useOV} from './OVContext.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'

const Images = () => {
  let {curStyle} = useOV()
  let images = curStyle.photos;

  return (
    <div id='OVImages'>
      <ImageDisplay />
      {images.length > 1 &&
      <ThumbnailDisplay images={images}/> }
    </div>
  )
}

export default Images

