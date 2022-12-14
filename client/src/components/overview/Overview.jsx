import React from 'react';
import Images from './Images.jsx';
import Styles from './Styles.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';
import Price from './Price.jsx';
import AddToBag from './AddToBag.jsx';
import Rating from './Rating.jsx';
import please from '../.././request.js';
import {useOV} from './OVContext.jsx';
import Modal from './Modal.jsx';
import SocialMedia from './SocialMedia.jsx';

const Overview = () => {
  let {product, curStyle, curSku, expand} = useOV()

  return (
    <div id='OVcontainer'>
      <Modal expand={expand} />
      <div id='Overview'>
        <div id='OVImageNInfo'>
          <Images />
          <div id='OVInfo'>
            <Rating />
            <p className='OVcenterInfo'>{product.category}</p>
            <h2 className='OVcenterInfo'>{product.name}</h2>
            <Price />
            <div>
            {product.features.map((f) => <p key={f.feature}><span style={{fontWeight: 'bold'}}>{f.feature}</span> : {f.value} </p>)}
            </div>
            <p><span style={{fontWeight: 'bold'}}>Selected Style</span> : {curStyle.name}</p>
            <Styles />
            {Object.keys(curStyle.skus)[0] === 'null' ?
            <div>
              <p>Too late sucka! We no longer carry this</p>
            </div>:
            <>
            {curSku.value === -2 ? <h2>select a size, silly</h2> : null}
            <div id='OVsizeNQty'>
              <Size />
              <Quantity />
            </div>
            <AddToBag />
            </>}
            <SocialMedia />
            </div>
        </div>
        <div id='OVdesc'>
            <h3>{product.slogan}</h3>
            <p> {product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Overview
