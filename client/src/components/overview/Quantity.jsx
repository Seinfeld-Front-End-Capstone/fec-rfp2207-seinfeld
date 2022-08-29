import React from 'react';

const Quantity = ({skus, skuIndex, quantity, setQuantity}) => {


  let count = skuIndex !== -1 ? Object.values(skus)[skuIndex].quantity : 0
  count = count > 15 ? 15 : count;
  const arr = [];
  for (let i = 2; i <= count; i++){
    arr.push(i)
  };

  quantity > count? setQuantity(1) : null

  const onSelect = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <div>
      <select value={quantity} onChange={onSelect}>
        <option value='1' hidden>1</option>
        {arr.map((num, index) => <option value={num} key={index}>{num}</option>)}
      </select>
    </div>
  )
}

export default Quantity