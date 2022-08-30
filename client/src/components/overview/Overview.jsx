import React, {useState , useEffect} from 'react';
import Image from './image.jsx'
import Style from './styles.jsx'
import Size from './size.jsx'
import Quantity from './quantity.jsx'
import Price from './price.jsx'
import AddToBag from './AddToBag.jsx'
import Stars from '.././helpers/Stars.jsx'
import AvgStarRating from '.././helpers/AvgStarRating.jsx'
import please from '../.././request.js'


const Overview = ({productId}) => {

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [styleIndex, setStyleIndex] = useState(0);
  const [skuIndex, setSkuIndex] = useState(-1);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [starsObj, setStarsObj] = useState(0)


  useEffect(() => {
    please.getProductInfo(productId)
    .then((data) => setProduct(data.data))
    .catch((err) => console.log(err))
    please.getStyles(productId)
    .then((data) => setStyles(data.data.results))
    .catch((err) => console.log(err))
    please.getReviewMeta(productId)
    .then((data) => setStarsObj(data.data.ratings))
    .catch((err) => console.log(err))
  },[])

  return (
    styles && product ?
    <div id='OVcontainer'>
    <div id='Overview'>
      <div id='OVImageNInfo'>
        <Image images={styles[styleIndex].photos} displayIndex={displayIndex} setDisplayIndex={setDisplayIndex} />
        <div id='OVInfo'>
          {AvgStarRating(starsObj, (avg) => <Stars rating={avg}/>)}
          <span>read all reviews</span>
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          <Price curStyle={styles[styleIndex]} />
          <p>selected style : {styles[styleIndex].name}</p>
          <Style styles={styles} setStyleIndex={setStyleIndex} setDisplayIndex={setDisplayIndex}/>
          <div id='OVsizeNQty'>
            <Size setSkuIndex={setSkuIndex} skus={styles[styleIndex].skus} skuIndex={skuIndex}/>
            <Quantity skus={styles[styleIndex].skus} skuIndex={skuIndex}setQuantity={setQuantity} quantity={quantity}/>
          </div>
          <AddToBag styles={styles} styleIndex={styleIndex} skuIndex={skuIndex} quantity={quantity}/>
        {/* <Favorite/> */}
        </div>
      </div>
      <div id='OVdesc'>
        <div>
          <h3>{product.slogan}</h3>
          <p> {product.description}</p>
        </div>
        <div>
          {product.features.map((f, index) => <p key={index}>{f.feature} : {f.value} </p>)}
        </div>
      </div>
    </div>
    </div>
  :
  <div>
    <h1>loading...</h1>
  </div>
  )
}

export default Overview