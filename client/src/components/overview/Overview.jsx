import React, {useState , useEffect} from 'react';
import Image from './image.jsx'
import {get} from '../.././request.js'

export default ({productId}) => {

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [images, setImages] = useState(null);
  const [curStyle, setCurStyle] = useState(null);

  useEffect(() => {
    get(`/products/${productId}`)
    .then((data) => setProduct(data.data))
    .catch((err) => console.log(err))
    get(`/products/${productId}/styles`)
    .then((data) => {
      let styles = data.data.results
      setStyles(styles)
      let images = new Map()
      styles.forEach((style) => {
        images[style.style_id] = style.photos
      })
      setImages(images)
    })
    .catch((err) => console.log(err))
  },[])

  return (
    product?
    <div>
      <div>
        <Image images={images} curStyle={curStyle}/>
        <div>
          <span>stars </span>
          <span>read all reviews</span>
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          <p>{product.default_price}</p>
          {/* <Style/>
          <Size/>
          <Quanity/>
          <AddToBag/>
        <Favorite/> */}
        </div>
      </div>
      <div>
        <h3>{product.slogan}</h3>
        <p> {product.description}</p>
      </div>
    </div>
  :
  <div>
    <h1>loading...</h1>
  </div>
  )
}