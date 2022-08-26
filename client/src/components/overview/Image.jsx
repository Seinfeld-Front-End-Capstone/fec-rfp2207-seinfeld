import React, {useState , useEffect}  from 'react';

const Images = ({images}) => {

  const [indexDisplay, setIndexDisplay] = useState(0)

  const onClick = (e) => {
    setIndexDisplay(e.target.dataset.key)
  }

  return (
    <div>
      <h2> images </h2>
      <img id='imagedisplay' src={images[indexDisplay].url}/>
      {images.map((image, index) => {
        return <img className='thumbnail' onClick={onClick} src={image.thumbnail_url} data-key={index} key={index}/>
      })}
    </div>
  )
}

export default Images

/*
to get images
https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product_id}/styles

headers.
*/