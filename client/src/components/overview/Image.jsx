import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Images = ({images, indexDisplay, setIndexDisplay}) => {

  const toPrevious = () => {
    let previous = indexDisplay === 0 ? images.length -1 : indexDisplay --;
    setIndexDisplay(previous);
  }

  const toNext = () => {
    let next = indexDisplay === images.length - 1 ? 0 : indexDisplay ++;
    setIndexDisplay(next);
  }

  console.log(images[indexDisplay].url)
  const currImageStyle = {backgroundImage: `url(${images[indexDisplay].url})`}

  return (
    <div id='OVimage'>
      <div id='OVimageDisplayBox'>
        <IoIosArrowBack className='leftArrow' onClick={toPrevious}/>
        <IoIosArrowForward className='rightArrow' onClick={toNext} />
        <div id='OVimagedisplay' style={currImageStyle}></div>
      </div>
      <div id='OVThumbnailSelection'>
        {images.map((image, index) => {
          return <Thumbnail thumbnail={image.thumbnail_url} key={index} index={index} setIndexDisplay={setIndexDisplay}/>
        })}
      </div>
    </div>
  )
}

export default Images

