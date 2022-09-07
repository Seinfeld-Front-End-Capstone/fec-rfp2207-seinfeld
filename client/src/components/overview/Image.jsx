import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Images = ({images, displayIndex, setDisplayIndex}) => {

  const toPrevious = () => {
    let previous = displayIndex === 0 ? images.length -1 : displayIndex --;
    setDisplayIndex(previous);
  }

  const toNext = () => {
    let next = displayIndex === images.length - 1 ? 0 : displayIndex ++;
    setDisplayIndex(next);
  }

  const currImageStyle = {backgroundImage: `url(${images[displayIndex].url})`}

  return (
    <div id='OVimage'>
      <div id='OVimageDisplayBox'>
        <IoIosArrowBack className='OVleftArrow' onClick={toPrevious}/>
        <IoIosArrowForward className='OVrightArrow' onClick={toNext} />
        <div id='OVimagedisplay' style={currImageStyle}></div>
      </div>
      <div id='OVThumbnailSelection'>
        {images.map((image, index) => {
          return <Thumbnail thumbnail={image.thumbnail_url} key={index} index={index} setDisplayIndex={setDisplayIndex}/>
        })}
      </div>
    </div>
  )
}

export default Images

