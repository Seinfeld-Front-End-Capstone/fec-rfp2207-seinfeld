import React from 'react'
import please from '../.././request.js'

const AddToBag = ({styles, styleIndex, skuIndex, quantity}) => {

  const addToBag = () => {
    console.log(`you are adding ${Object.keys(styles[styleIndex].skus)[skuIndex]} ${quantity} times`)
    // for (let i = 1; i <= quantity; i++) {
    //   please.addToBag({sku_id:Object.keys(styles[styleIndex].skus)[skuIndex] })
    // }
  }

  return (
    <button id='OVAddToBag' disabled={quantity === 0 || skuIndex === -1} onClick={addToBag}>AddToBag</button>
  )
}

export default AddToBag