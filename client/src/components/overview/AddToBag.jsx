import React, { useState, useEffect } from 'react'
import please from '../.././request.js'
import { useOV } from './OVContext.jsx'

const AddToBag = () => {
  let { quantity, curSku, setCurSku } = useOV();
  const [ disableAdd, setDisableAdd ] = useState(false)

  const addProduct = () => {
    if (curSku.value < 0) {
      setCurSku({value:-2, label: 'Select Size', hidden: true})
    } else {
      for (let i = 1; i <= quantity.value; i++) {
        please.AddToBag({sku_id:curSku.number})
      }
      setDisableAdd(true)
    }
    please.getBag().then((data) => console.log(data.data))
  }

  useEffect(() => {
    setDisableAdd(false)
  },[quantity, curSku])

  const addButtonText = disableAdd ? 'In The Bag' : 'Add To Bag';
  const buttonStyle =  disableAdd ? {backgroundColor:'var(--light-green)', color: 'white', pointerEvents: 'none'} : null;


  return (
    <>
      <button id='OVAddToBag' disabled={disableAdd} style={buttonStyle} onClick={addProduct}>{addButtonText}</button>
    </>
  )
}

export default AddToBag