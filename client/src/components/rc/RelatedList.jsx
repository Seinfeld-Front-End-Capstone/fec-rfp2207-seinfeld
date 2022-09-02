import React, {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import request from '../../request.js';

 /* *** Renders a list of products in the related items list *** */

const RelatedList = ({ id }) => {
  const [list, setList] = useState([]);


  useEffect(() => {
    request.getRelated(id)
      .then((data) => {
        setList(data.data)
      })
  }, [])

  /* Creates a related item card for each element in the list of related items */
  var createCard = list.map((productID) => {
    return <RelatedItemCard key={productID} pID={productID} ogID={id} />
  });

  return (
    <div className="RC_related_list">
      <h6>Related Items</h6>
      <ul>
       {createCard}
      </ul>
    </div>
  )
}

export default RelatedList;
