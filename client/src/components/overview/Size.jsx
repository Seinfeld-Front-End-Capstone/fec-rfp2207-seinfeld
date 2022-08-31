import React from 'react';

const Size = ({skus, setSkuIndex, skuIndex}) => {
  const keys = Object.keys(skus)
  const values = Object.values(skus)

  const onSelect = (e) => {
    setSkuIndex(e.target.value)
  }

  return (
    <div>
      <select className='OVselect' value={skuIndex} onChange={onSelect}>
      <option value='-1' hidden>Select Size</option>
        {values.map((value,index) => <option value={index} key={index}>{value.size}</option>)}
      </select>
    </div>
  )
}

export default Size;