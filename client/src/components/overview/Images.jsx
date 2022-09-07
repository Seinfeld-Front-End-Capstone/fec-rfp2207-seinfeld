import React from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {useOV} from './OVContext.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'
import {AiOutlineExpand} from 'react-icons/ai'

const Images = () => {
  let {curStyle, expand, setExpand} = useOV()
  let images = curStyle.photos;

  return (
    <div id='OVImages'>
      <ImageDisplay>
        <AiOutlineExpand className='OVImageExpand' onClick={() => setExpand(true)}/>
      </ ImageDisplay>
      {images.length > 1 &&
      <div id='OVThumbnailDisplayBox'>
        <div id='OVThumbnailSwiper'>
          <ThumbnailDisplay />
        </div>
      </div>}
    </div>
  )
}

export default Images

