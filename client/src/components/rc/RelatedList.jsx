import React from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';

var RelatedList = () => {
  return (
    <div>
      <h5>This will be the list of related items!</h5>
      <ul>
        for each item in the list of related items, a card will appear.
        <RelatedItemCard />
      </ul>
    </div>
  )
}

export default RelatedList;
