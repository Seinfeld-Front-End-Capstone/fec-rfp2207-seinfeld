import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

/* contains related items and outfit lists */

const ItemLists = ({ productId, setProduct }) => {
  return(
    <div
    className="RC_item_lists_container">
      <div>
        <h5 className="RC_h5">Related Items</h5>
      </div>
      <div
      className="RC_card_container">
        <RelatedList
        id={productId}
        setProduct={setProduct}/>
      </div>
      <div>
        <h5 className="RC_h5">Your Outfit</h5>
      </div>
      <div
      className="RC_outfit_container">
        <OutfitList
        id={productId}/>
      </div>
    </div>
  )
}

export default ItemLists;