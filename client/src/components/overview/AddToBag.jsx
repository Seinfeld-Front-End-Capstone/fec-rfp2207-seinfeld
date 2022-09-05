import React from 'react'
import please from '../.././request.js'
import {useOV} from './OVContext.jsx'

const AddToBag = () => {
  let {quantity, curSku, setCurSku} = useOV();

  const addToBag = () => {
    console.log(`you are adding ${curSku.number}, size ${curSku.label} ${quantity.value} times`)
    // for (let i = 1; i <= quantity; i++) {
    //   please.addToBag({sku_id:Object.keys(styles[styleIndex].skus)[skuIndex] })
    // }
  }

  const dropSize = () => {
    setCurSku({value:-2, label: 'Select Size', hidden: true})
  }

  return (
    <>
      {curSku.value < 0 ?
      <button id='OVAddToBag' onClick={dropSize}>AddToBag</button>:
      <button id='OVAddToBag' onClick={addToBag}>AddToBag</button>
      }
    </>
  )
}

export default AddToBag