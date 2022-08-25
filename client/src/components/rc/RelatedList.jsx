import React from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import request from '../../request.js';

//for each item in the related items, populate the list with an item card.

//the overview item's product id needs to be sent down as props

//the related item card needs to be sent the product id for the related item, not the original product's id.

//This should be stateful?

const RelatedList = ({ id }) => {
  const related = request.getRelated(id);
  console.log('related:', related);
  return (
    <div>
      <h6>Related Items</h6>
      <ul>{related.map((itemId) => {
       <RelatedItemCard pId={itemId}/>
      })}
      </ul>
    </div>
  )
}

export default RelatedList;
