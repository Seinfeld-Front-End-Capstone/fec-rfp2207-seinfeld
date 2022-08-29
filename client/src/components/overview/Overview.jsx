import React, {useState , useEffect} from 'react';
import Image from './image.jsx'
import Style from './styles.jsx'
import Size from './size.jsx'
import Quantity from './Quantity.jsx'
import please from '../.././request.js'


const Overview = ({productId}) => {

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [styleIndex, setStyleIndex] = useState(0);
  const [skuIndex, setSkuIndex] = useState(-1);
  const [indexDisplay, setIndexDisplay] = useState(0);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    please.getProductInfo(productId)
    .then((data) => setProduct(data.data))
    .catch((err) => console.log(err))
    please.getStyles(productId)
    .then((data) => setStyles(data.data.results))
    .catch((err) => console.log(err))
  },[])

  console.log({styledata})


  return (
    styles && product?
    <div id='OVcontainer'>
    <div id='Overview'>
      <div id='OVImageNInfo'>
        <Image images={styles[styleIndex].photos} indexDisplay={indexDisplay} setIndexDisplay={setIndexDisplay} />
        <div id='OVInfo'>
          <span>* * * * * </span>
          <span>read all reviews</span>
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          <p>{styles[styleIndex].original_price}</p>
          <Style styles={styles} setStyleIndex={setStyleIndex}/>
          <Size setSkuIndex={setSkuIndex} skus={styles[styleIndex].skus} skuIndex={skuIndex}/>
          <Quantity skus={styles[styleIndex].skus} skuIndex={skuIndex}setQuantity={setQuantity} quantity={quantity}/>
          {/* <AddToBag/>
        <Favorite/> */}
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