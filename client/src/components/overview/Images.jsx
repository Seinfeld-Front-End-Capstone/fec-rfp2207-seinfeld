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

  const leftHidden = left >= 0 ? {visibility: 'hidden'} : null;
  const rightHidden = left <= (images.length - 5) * -120 ? {visibility: 'hidden'}: null;

  return (
    <div id='OVImages'>
      <ImageDisplay >
        <AiOutlineExpand className='OVImageExpand' onClick={() => setExpand(true)} />

        {images.map((image, index) => {
        let styles = {
          backgroundImage: image.url ? `url(${image.url})` : `url(https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/116a8ebc414c519ad1cfc0fe63f79d3e.jpg?compress=1&resize=800x600&vertical=top)`
        }

        if (index === displayIndex) {
          styles.opacity = 1
        }

        return  <div id='OVimagedisplay' key={index} style={styles} />
        })}

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

