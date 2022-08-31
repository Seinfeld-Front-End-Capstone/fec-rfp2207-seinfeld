import React, {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import request from '../../request.js';

//for each item in the related items, populate the list with an item card.

//the overview item's product id needs to be sent down as props

//the related item card needs to be sent the product id for the related item, not the original product's id.

//This should be stateful?

const RelatedList = ({ id }) => {
  const [list, setList] = useState([]);


  useEffect(() => {
    request.getRelated(id)
      .then((data) => {
        setList(data.data)
      })
  }, [])




  // console.log('State:', list);


  var iterate = list.map((productID) => {
    return <RelatedItemCard key={productID} pID={productID} ogID={id} />
  });

  return (
    <div>
      <h6>Related Items</h6>
      <ul className="RC_related_list">
       {iterate}
      </ul>
    </div>
  )
}

export default RelatedList;
