import React from 'react'
import {useOV} from './OVContext.jsx'

const Price = () => {
  let {curStyle} = useOV()

  return (
    <div>
    {curStyle.sale_price ?
      <p>{curStyle.sale_price} <span style={{textDecorationLine : 'line-through'}}>{curStyle.original_price}</span></p>:
      <p>{curStyle.original_price}</p>}
    </div>
  )
}
export default Price