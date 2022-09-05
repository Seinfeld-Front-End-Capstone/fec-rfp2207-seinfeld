import React from 'react';
import {useOV} from './OVContext.jsx'

const Styles = () => {
 let {styles, setCurStyle, setDisplayIndex, curSku, setCurSku, quantity, setQuantity} = useOV()

  const onClick = (e) => {
    const cur = styles[e.target.dataset.key]
    const i = curSku.value
    const keys = Object.keys(cur.skus)
    const values = Object.values(cur.skus)
    if (i > -1) {
      const count = values[i].quantity
      setCurSku({value: i, label: values[i].size, qty: values[i].quantity, number: keys[i]})
      quantity.value > count? setQuantity({value:1, label: 1}) :null;
    }
    setCurStyle(cur)
    setDisplayIndex(0)
  }

  //find a way to set half circles

  return (
    <div id='OVStyleBox'>
      {styles.map((style, index) => {
        return <div className='OVstyles' title={style.name} onClick={onClick} data-key={index} key={style.style_id}>{index}</div>
      })}
    </div>
  )
}

export default Styles