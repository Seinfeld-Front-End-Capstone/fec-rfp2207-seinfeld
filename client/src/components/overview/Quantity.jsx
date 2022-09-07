import React, {useState} from 'react';
import Select from 'react-select';
import {useOV} from './OVContext.jsx';

const Quantity = () => {
  let {curSku, quantity, setQuantity} = useOV()

  let count = curSku.qty > 15 ? 15 : curSku.qty;
  const options = [];
  for (let i = 1; i <= count; i++){
    options.push({value: i, label: i})
  };

  const onSelect = (select) => {
    setQuantity(select)
  }

  const hideOption = (option) => option.data.hidden ? false: true

  return (
    <div>
      {count === 0 ? <p>Sold Out!</p>:
      <Select className='OVselect' value={quantity} options={options} onChange={onSelect} filterOption={hideOption} />}
    </div>
  )
}

export default Quantity