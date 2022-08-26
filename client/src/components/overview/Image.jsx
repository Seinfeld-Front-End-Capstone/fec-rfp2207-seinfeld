import React, {useState , useEffect}  from 'react';
import Thumbnail from './Thumbnail.jsx'

const Images = ({images}) => {

  const [indexDisplay, setIndexDisplay] = useState(0)


  return (
    <div id='OVimage'>
      <div id='OVimageDisplayBox'>
        <img id='OVimagedisplay' src={images[indexDisplay].url}/>
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

