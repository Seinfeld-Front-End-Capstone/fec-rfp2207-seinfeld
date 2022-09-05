import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

/* contains related items and outfit lists */

const ItemLists = ({ productId }) => {
  return(
    <div className="RC_item_lists_container">
      <div className="RC_card_container">
        <RelatedList id={productId}/>
      </div>
      <div className="RC_outfit_container">
        <OutfitList id={productId}/>
      </div>
    </div>
  )
}

export default ItemLists;