import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {useOV} from './OVContext.jsx'

const Images = () => {
  let {curStyle, displayIndex, setDisplayIndex } = useOV()
  let images = curStyle.photos;

  const toPrevious = () => {
    let previous = displayIndex === 0 ? images.length -1 : displayIndex --;
    setDisplayIndex(previous);
  }

  const toNext = () => {
    let next = displayIndex === images.length - 1 ? 0 : displayIndex ++;
    setDisplayIndex(next);
  }

  let imageUrl = images[displayIndex].url
  const currImageStyle = {backgroundImage: imageUrl ? `url(${imageUrl})` : `url(http://comparecarprices.herokuapp.com/static/images/sorry.png)`}

  return (
    <div id='OVimage'>
      <div id='OVimageDisplayBox'>
        <IoIosArrowBack className='OVleftArrow' onClick={toPrevious}/>
        <IoIosArrowForward className='OVrightArrow' onClick={toNext} />
        <div id='OVimagedisplay' style={currImageStyle}></div>
      </div>
      <div id='OVThumbnailSelection'>
        {images.map((image, index) => {
          return <Thumbnail thumbnail={image.thumbnail_url} key={index} index={index}/>
        })}
      </div>
    </div>
  )
}

export default Images

