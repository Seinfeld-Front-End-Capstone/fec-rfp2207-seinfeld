import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

const ItemLists = ({ productId }) => {
  return(
    <div>
      <RelatedList id={productId}/>
      <OutfitList />
    </div>
  )
}

export default ItemLists;