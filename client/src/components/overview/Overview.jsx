import React from 'react';
import Images from './images.jsx'
import Styles from './styles.jsx'
import Size from './size.jsx'
import Quantity from './quantity.jsx'
import Price from './price.jsx'
import AddToBag from './AddToBag.jsx'
import Rating from './Rating.jsx'
import please from '../.././request.js'
import {useOV} from './OVContext.jsx'

const Overview = () => {
  let {product, curStyle, curSku} = useOV()

  return (
    <div id='OVcontainer'>
      <div id='Overview'>
        <div id='OVImageNInfo'>
          <Images />
          <div id='OVInfo'>
            <Rating />
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <Price />
            <p>selected style : {curStyle.name}</p>
            <Styles />
            {Object.keys(curStyle.skus)[0] === 'null' ?
            <div>
              <p>OUT OF STOCK!</p>
            </div>
            :
            <>
            {curSku.value === -2 ? <h2>select a size please!</h2> : null}
            <div id='OVsizeNQty'>
              <Size />
              <Quantity />
            </div>
            <AddToBag />
            </>}
        {/* <Favorite/> */}
            </div>
        </div>
        <div id='OVdesc'>
          <div>
            <h3>{product.slogan}</h3>
            <p> {product.description}</p>
          </div>
          <div>
            {product.features.map((f, index) => <p key={index}><span style={{fontWeight: 'bold'}}>{f.feature}</span> : {f.value} </p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
