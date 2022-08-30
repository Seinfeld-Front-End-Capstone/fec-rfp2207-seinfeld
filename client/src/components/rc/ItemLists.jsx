import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

const ItemLists = ({ productId }) => {
  return(
    <div>
      <div className="RC_card_container">
        <RelatedList id={productId}/>
      </div>
      <div className="RC_outfit_container">
        <OutfitList />
      </div>
    </div>
  )
}

export default ItemLists;