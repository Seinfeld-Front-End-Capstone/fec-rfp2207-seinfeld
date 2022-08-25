import React, {useState, useEffect} from 'react';
import Overview from './overview/Overview.jsx';
import please from '.././request.js'


export default () => {

  const [product, setProduct] = useState(null)

  useEffect(() => {
    please.getProducts()
    .then((data) => setProduct(data.data[0]))
    .catch((err) => console.log(err))
  },[])

  console.log(product)
  return (
    product ?
    <div>
      <h1>buymorethings</h1>
      <Overview productId={product.id}/>
    </div>
    :
    <div>
      <h1>loading...</h1>
    </div>
  )
}