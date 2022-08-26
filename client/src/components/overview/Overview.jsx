import React, {useState , useEffect} from 'react';
import Image from './image.jsx'
import please from '../.././request.js'

const Overview = ({productId}) => {

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [curStyle, setCurStyles] = useState(0);


  useEffect(() => {
    please.getProductInfo(productId)
    .then((data) => setProduct(data.data))
    .catch((err) => console.log(err))
    please.getStyles(productId)
    .then((data) => setStyles(data.data.results))
    .catch((err) => console.log(err))
  },[])



  return (
    styles?
    <div>
      <div>
        <Image images={styles[curStyle].photos}/>
        <div>
          <span>* * * * * </span>
          <span>read all reviews</span>
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          <p>{styles[curStyle].original_price}</p>
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

export default Overview