import React, { useState } from 'react';
import { useOV } from './OVContext.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import ThumbnailDisplay from './ThumbnailDisplay.jsx'
import { AiOutlineExpand, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Images = () => {
  let {curStyle, setExpand, displayIndex, left, setLeft} = useOV()
  let images = curStyle.photos;

  const toTheLeft = () => {
    setLeft(left + 120)
  }

  const toTheRight = () => {
    setLeft(left - 120)
  }
  console.log(images.length)
  const leftHidden = left >= 0 ? {visibility: 'hidden'} : null;
  const rightHidden = left <= (images.length - 5) * -120 ? {visibility: 'hidden'}: null;
  console.log({leftHidden, rightHidden})

  return (
    <div id='OVImages'>
      <ImageDisplay >
        <AiOutlineExpand className='OVImageExpand' onClick={() => setExpand(true)} />
      </ ImageDisplay>
      {images.length > 1 &&
      <div id='OVThumbnailContainer'>
        <AiOutlineDoubleLeft className='OVThumbnailArrows' onClick={toTheLeft} style={leftHidden}/>
        <div id='OVThumbnailDisplayBox'>
          <div id='OVThumbnailSwiper'>
            <ThumbnailDisplay />
          </div>
        </div>
        <AiOutlineDoubleRight className='OVThumbnailArrows'  onClick={toTheRight} style={rightHidden}/>
      </div>}
    </div>
  )
}

export default Images

