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
        while (itemDisplay.length < 5) {
          list.map((item) => {
            setItemDisplay(prevDisplay => [...prevDisplay, item]);
          });
        }
      })
  }, [id]);

  console.log('overview id:', id);
  console.log('related list:', list);
  console.log('related display:', itemDisplay);



  /* Creates a related item card for each element in the list of
related items */
  var createCard = list.map((productID) => {
    return <RelatedItemCard
    key={productID}
    pID={productID}
    ogID={id}
    setOVProduct={setProduct}
    curDisplay={itemDisplay}/>
  });

  const handlePrevClick = (e) => {
    e.preventDefault();
    var prev = itemDisplay[0] - 1;

    const checkPrev = (targetKey) => {
      if (list.indexOf(targetKey) !== -1) {
        setItemDisplay(itemDisplay.filter((item) => item !== itemDisplay[3]));
        setOutfitDisplay(prevDisplay => [prev, ...prevDisplay]);
      } else if (list.indexOf(targetKey) === -1) {
      console.log('Error, there is no item that way')
      } else {
        checkPrev(prev - 1)
      }
    }
    checkPrev(prev);
  }

  const handleNextClick = (e) => {
    e.preventDefault();
    var next = itemDisplay[3] + 1;

    const checkNext = (targetKey) => {
      if (list.indexOf(targetKey) !== -1) {
        setItemDisplay(itemDisplay.filter((item) => item !== itemDisplay[0]));
        setOutfitDisplay(prevDisplay => [...prevDisplay, next]);
      } else if (list.indexOf(targetKey) === -1) {
      console.log('Error, there is no item that way')
      } else {
        checkNext(next + 1)
      }
    }
    checkNext(next);
  }

  return (
    <div>
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
