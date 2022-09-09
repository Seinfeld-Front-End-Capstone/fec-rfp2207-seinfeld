import React, {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import request from '../../request.js';

 /* *** Renders a list of products in the related items list *** */

const RelatedList = ({ id, setProduct }) => {
  const [list, setList] = useState([]);
  const [itemDisplay, setItemDisplay] = useState([]);
  const [index, setIndex] = useState(0);

  //for each index in item Display,
    // display a card from list

  useEffect(() => {
    request.getRelated(id)
      .then((data) => {
        setList(data.data);
      });
      setIndex(0);
  }, [id]);


  useEffect(() => {
    renderCards();

  }, [list, index])

  /* Creates a related item card for each element in the list of
related items */
if (itemDisplay[0]) {
  var createCard = itemDisplay.map((productID) => {
    return <RelatedItemCard
    key={productID}
    pID={productID}
    ogID={id}
    setOVProduct={setProduct}/>
  });
}

  const renderCards = () => {
    var fourCards = [];
    for (var i = index; i < index + 4; i++) {
      fourCards.push(list[i]);
    }
    setItemDisplay(fourCards);
  }


  const handlePrevClick = (e) => {
    e.preventDefault();
    setIndex(prevIndex => prevIndex - 1);
  }

  const handleNextClick = (e) => {
    e.preventDefault();
    setIndex(prevIndex => prevIndex + 1);
  }

  const leftButtonVis = index > 0 ? {visibility: 'visible'} : {visibility: "hidden"};
  const rightButtonVis = index === list.length - 4  ? {visibility: 'hidden'} : {visibility: 'visible'};

  return (
    <div>
      <ul
      className="RC_related_list">
        <button style={leftButtonVis}
        className="RC_prev"
        onClick={handlePrevClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {createCard}
        <button style={rightButtonVis}
        className="RC_next"
        onClick={handleNextClick}>
         <i className="fa-solid fa-chevron-right"></i>
        </button>
      </ul>
    </div>
  )
}

export default RelatedList;
