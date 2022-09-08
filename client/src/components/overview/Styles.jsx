import React from 'react';
import {useOV} from './OVContext.jsx'
import chroma from 'chroma-js'
import {FaCheckCircle} from 'react-icons/fa'

const Styles = () => {
 let {styles, curStyle, setCurStyle, setDisplayIndex, curSku, setCurSku, quantity, setQuantity, setLeft} = useOV()

  const onClick = (e) => {
    const cur = styles[e.target.dataset.key]
    const i = curSku.value
    const keys = Object.keys(cur.skus)
    const values = Object.values(cur.skus)
    if (i > -1) {
      const count = values[i].quantity
      setCurSku({value: i, label: values[i].size, qty: values[i].quantity, number: keys[i]})
      quantity.value > count? setQuantity({value:count, label: count}) :null;

    }
    setCurStyle(cur)
    setDisplayIndex(0)
    setLeft(0)
  }

  return (
    <div id='OVStyleBox'>
      {styles.map((style, index) => {

        let url = style.photos[0].thumbnail_url ?
        style.photos[0].thumbnail_url:
        `https://img.ltwebstatic.com/images3_pi/2021/09/15/163167654356847e12d337794dac92991b367b6323_thumbnail_600x.webp`

        return (
        <div id='OVStyleContainer'key={style.style_id} >
          <div className='OVstyles' style={{backgroundImage: `url(${url})`}} title={style.name} onClick={onClick} data-key={index}></div>
          {style.name === curStyle.name ? <FaCheckCircle id='OVCheckMark'/> : null}
        </div>)
      })}
    </div>
  )
}

export default Styles

