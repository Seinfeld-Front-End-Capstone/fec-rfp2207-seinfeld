import React, {createContext, useEffect, useContext, useState} from 'react';
import please from '../.././request.js'
import axios from 'axios'

const OVContext = createContext();

export function useOV() {
  return useContext(OVContext)
}

export function OVProvider({productId, children}) {

  const [product, setProduct] = useState(null);
  const [styles, setStyles] = useState(null);
  const [curSku, setCurSku] = useState({value:-1, label: 'Select Size'})
  const [skuIndex, setSkuIndex] = useState(-1);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [quantity, setQuantity] = useState({value:0, label: ' - ', hidden:true});
  const [starsObj, setStarsObj] = useState(0);
  const [curStyle, setCurStyle] = useState({})
  const [expand, setExpand] = useState(false)
  const [left, setLeft] = useState(0)



  useEffect(() => {
    setLeft(0)
    setDisplayIndex(0);
    setCurSku({value:-1, label: 'Select Size'});
    setQuantity({value:0, label: ' - ', hidden:true})

    axios.all([please.getProductInfo(productId), please.getStyles(productId), please.getReviewMeta(productId)])
    .then((data) => {
      setProduct(data[0].data)
      setStyles(data[1].data.results)
      setStarsObj(data[2].data.ratings)
      setCurStyle(data[1].data.results[0])
    })
    .catch((err) => console.log(err))
  },[productId])


  const values = {product, setProduct, styles, setStyles, skuIndex, setSkuIndex, displayIndex, setDisplayIndex, quantity, setQuantity, starsObj, setStarsObj, curStyle, setCurStyle, curSku, setCurSku, expand, setExpand, left, setLeft}

  return (
    styles && product ?
    <OVContext.Provider value={values}>
      {children}
    </OVContext.Provider>:
    <div>
      <h1>loading..</h1>
    </div>
  )
}
