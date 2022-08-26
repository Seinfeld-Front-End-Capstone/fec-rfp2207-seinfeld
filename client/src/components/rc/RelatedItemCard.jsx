import React from 'react';
import request from '../../request.js';
//takes in the item id and populates each element of the card with relevent info.

const RelatedItemCard = ({ pID }) => {
  request.getProductInfo(pID)
    .then((data) => {
      console.log('data:', data)
    })
  return (
    <aside>
      <img />
      <img />
      <h6>category</h6>
      <h5>product name</h5>
      <p><small>price</small></p>
      <img />
    </aside>
  )
}

export default RelatedItemCard;