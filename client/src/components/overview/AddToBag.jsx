import React from 'react'
import please from '../.././request.js'
import {useOV} from './OVContext.jsx'

const AddToBag = () => {
  let {quantity, curSku, setCurSku} = useOV();

  const addToBag = () => {
    if (curSku.value < 0) {
      setCurSku({value:-2, label: 'Select Size', hidden: true})
    } else {
       console.log('addedTobag', quantity)
      for (let i = 1; i <= quantity.value; i++) {
        console.log(curSku.number)
        // please.addToBag({sku_id:curSku.number})
      }
    }
  }

  return (
    <>
      <button id='OVAddToBag' onClick={addToBag}>Add To Bag</button>
    </>
  )
}

export default AddToBag