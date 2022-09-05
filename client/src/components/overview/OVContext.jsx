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
  const [styleIndex, setStyleIndex] = useState(0);
  const [curSku, setCurSku] = useState({value:-1, label: 'Select Size'})
  const [skuIndex, setSkuIndex] = useState(-1);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [quantity, setQuantity] = useState({value:0, label: ' - ', hidden:true});
  const [starsObj, setStarsObj] = useState(0);
  const [curStyle, setCurStyle] = useState({})

  useEffect(() => {
    axios.all([please.getProductInfo(productId), please.getStyles(productId), please.getReviewMeta(productId)])
    .then((data) => {
      setProduct(data[0].data)
      setStyles(data[1].data.results)
      setStarsObj(data[2].data.ratings)
      setCurStyle(data[1].data.results[0])
    })
    .catch((err) => console.log(err))
  },[])


  const values = {product, setProduct, styles, setStyles, styleIndex, setStyleIndex, skuIndex, setSkuIndex, displayIndex, setDisplayIndex, quantity, setQuantity, starsObj, setStarsObj, curStyle, setCurStyle, curSku, setCurSku}

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
