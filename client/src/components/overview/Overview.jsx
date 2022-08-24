import React from 'react';
import Image from './image.jsx'

export default () => {
  return (
    <div>
      <div>
        <Image/>
        <div>
          <span>stars </span>
          <span>read all reviews</span>
          <p>category</p>
          <h2>Product Name</h2>
          <p>Price</p>
          {/* <Style/>
          <Size/>
          <Quanity/>
          <AddToBag/>
          <Favorite/> */}
        </div>
      </div>
      <div>
        <h3>Product Slogan</h3>
        <p> Product description</p>
      </div>
    </div>
  )
}