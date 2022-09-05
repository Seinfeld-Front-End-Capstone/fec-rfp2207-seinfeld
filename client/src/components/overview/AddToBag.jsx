import React from 'react'
import please from '../.././request.js'
import {useOV} from './OVContext.jsx'

const AddToBag = () => {
  let {quantity, curSku, setCurSku} = useOV();

  const addToBag = () => {
    curSku.value < 0 ?
    setCurSku({value:-2, label: 'Select Size', hidden: true}):
    console.log(`you are adding ${curSku.number}, size ${curSku.label} ${quantity.value} times`)
    // for (let i = 1; i <= quantity; i++) {
    //   please.addToBag({sku_id:Object.keys(styles[styleIndex].skus)[skuIndex] })
    // }
  }

  return (
    <>
      <button id='OVAddToBag' onClick={addToBag}>Add To Bag</button>
    </>
  )
}

export default AddToBag