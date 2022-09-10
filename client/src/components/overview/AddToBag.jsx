import React from 'react'
import please from '../.././request.js'
import {useOV} from './OVContext.jsx'

const AddToBag = () => {
  let {quantity, curSku, setCurSku} = useOV();

  const addToBag = () => {
    if (curSku.value < 0) {
      setCurSku({value:-2, label: 'Select Size', hidden: true})
    } else {
      for (let i = 1; i <= quantity.value; i++) {
        please.AddToBag({sku_id:curSku.number})
      }
    }
    please.getBag().then((data) => console.log(data.data))
  }

  return (
    <>
      <button id='OVAddToBag' onClick={addToBag}>Add To Bag</button>
    </>
  )
}

export default AddToBag