import React, {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import request from '../../request.js';

 /* *** Renders a list of products in the related items list *** */

const RelatedList = ({ id, setProduct }) => {
  const [list, setList] = useState([]);
  const [key, setKey] =useState(0);
  const [itemDisplay, setItemDisplay] = useState([]);


  useEffect(() => {
    request.getRelated(id)
      .then((data) => {
        setList(data.data);
        list.map((item) => {
          setKey(prevKey => [...prevKey, item]);
        });
      })
  }, []);



  /* Creates a related item card for each element in the list of
related items */
  var createCard = list.map((productID) => {
    return <RelatedItemCard
    key={productID}
    pID={productID}
    ogID={id}
    setOVProduct={setProduct}/>
  });

  const handlePrevClick = (e) => {
    e.preventDefault();
    var prev = itemDisplay[0] - 1;
    if (list.indexOf(prev) !== -1) {
      setItemDisplay(itemDisplay.filter((item) => item !==
itemDisplay[3]));
      setItemDisplay(prevDisplay => [prev, ...prevDisplay]);
    }
  }

  const handleNextClick = (e) => {
    e.preventDefault();
    var next = itemDisplay[3] + 1;
    if (list.indexOf(next) !== -1) {
      setItemDisplay(itemDisplay.filter((item) => item !==
itemDisplay[0]));
      setItemDisplay(prevDisplay => [...prevDisplay, next]);
    }
  }

  return (
    <div>
      <h5>Related Items</h5>
      <ul
      className="RC_related_list">
        <button
        className="RC_prev"
        onClick={handlePrevClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {createCard}
        <button
        className="RC_next"
        onClick={handleNextClick}>
         <i className="fa-solid fa-chevron-right"></i>
        </button>
      </ul>
    </div>
  )
}

export default RelatedList;
