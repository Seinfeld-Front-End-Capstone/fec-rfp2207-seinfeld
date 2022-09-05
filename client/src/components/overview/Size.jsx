import React, {useState} from 'react';
import Select from 'react-select';
import {useOV} from './OVContext.jsx';

const Size = () => {
  let {curStyle, setCurSku, curSku, quantity, setQuantity} = useOV();
  let skus = curStyle.skus

  const keys = Object.keys(skus)
  const values = Object.values(skus)
  const selectRef = React.useRef()

  const onSelect = (select) => {
    setCurSku(select)
    quantity.value === 0? setQuantity({value:1, label:1}): null;
  }

  curSku.value === -2 ? selectRef.current.focus() : null;

  const options = values.map((value, index) => value.quantity === 0 ?
  {value: index, label: value.size, qty: value.quantity, number: keys[index], isDisabled:true}:
  {value: index, label: value.size, qty: value.quantity, number: keys[index]})

  const hideOption = (option) => option.data.hidden ? false: true

  return (
    <>
      <Select className='OVselect' openMenuOnFocus={true} value={curSku} options={options} onChange={onSelect} ref={selectRef} filterOption={hideOption}/>
    </>
  )
}

export default Size;