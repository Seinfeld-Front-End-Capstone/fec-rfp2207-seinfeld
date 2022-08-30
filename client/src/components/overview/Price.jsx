import React from 'react'

const Price = ({curStyle}) => {
  return (
    <div>
    {curStyle.sale_price ?
      <p>{curStyle.sale_price} <span style={{textDecorationLine : 'line-through'}}>{curStyle.original_price}</span></p> :
      <p>{curStyle.original_price}</p>}
    </div>
  )
}
export default Price