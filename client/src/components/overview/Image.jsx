import React, {useState , useEffect}  from 'react';
import {get} from '../.././request.js'

export default ({styles}) => {

  const [displayImage, setDisplayImage] = useState(null);
  const [arrOfImage, setArrOfImage] = useState(null);

  useEffect(() => {

  })

  return (
    <div>
      <h2> images </h2>
    </div>
  )
}


/*
to get images
https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product_id}/styles

headers.
*/