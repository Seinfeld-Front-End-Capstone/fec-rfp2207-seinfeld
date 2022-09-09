import React from 'react'
import {useOV} from './OVContext.jsx'

const Price = () => {
  let {curStyle} = useOV()

  return (
    <div>
    <span style={{fontWeight: 'bold'}}>Price</span>
    {curStyle.sale_price ?
      <span> : {curStyle.sale_price} <span style={{textDecorationLine : 'line-through'}}>{curStyle.original_price}</span></span>:
      <span> : {curStyle.original_price}</span>}
    </div>
  )
}
export default Price