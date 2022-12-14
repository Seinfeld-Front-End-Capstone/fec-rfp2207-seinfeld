import React, {useState, useEffect, useCallback} from 'react';
import OutfitCard from './OutfitCard.jsx';


 /* *** Renders a list of items in the Your Outfit component *** */

const OutfitList = ({ id, setProduct }) => {
  const [outfit, setOutfit] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [outfitDisplay, setOutfitDisplay] = useState([]);

  /* adds a new card to the list */
  const addOutfit = outfit.map((item) => {
    return <OutfitCard key={item} itemNo={item} productID={id}
    deleteCard={setOutfit} deleteCardDisplay={setOutfitDisplay}
    curOutfit={outfit} curDisplay={outfitDisplay} setOVProduct={setProduct}/>
  });

  /* handles the + button being clicked */
  const handleAddToOutfit = (e) => {
    e.preventDefault();
    setOutfit(prevOutfit => [...prevOutfit, cardCount]);
    if (outfitDisplay.length < 3) {
      setOutfitDisplay(prevDisplay => [...prevDisplay, cardCount]);
    }
    setCardCount(prevCount => prevCount + 1);
    // console.log(outfitDisplay);
  }

  /* handles click of next arrow button */
  const handleNextClick = (e) => {
    e.preventDefault();
    var next = outfitDisplay[2] + 1;
    const checkKeyGaps = (targetKey) => {
      if (outfit.indexOf(targetKey) !== -1) {
        setOutfitDisplay(outfitDisplay.filter((item) => item !== outfitDisplay[0]));
        setOutfitDisplay(prevDisplay => [...prevDisplay, next]);
      } else if (outfit.indexOf(targetKey) === -1) {
        console.log('Error, there is no item that way')
      } else {
        checkKeyGaps(next + 1)
      }
    }
    checkKeyGaps(next);
    // console.log('outfit:', outfit)
    // console.log('display:', outfitDisplay);
  }

  /* handles click of previous arrow button */
  const handlePrevClick = (e) => {
    e.preventDefault();
    var prev = outfit.indexOf(outfitDisplay[0] - 1);
    const checkKeyGaps = (targetKey) => {
      if (outfit.indexOf(targetKey) !== -1) {
        setOutfitDisplay(outfitDisplay.filter((item) => item !== outfitDisplay[2]));
        setOutfitDisplay(prevDisplay => [prev, ...prevDisplay]);
      } else if (outfit.indexOf(targetKey) === -1) {
        console.log('Error, there is no item that way');
      } else {
        checkKeyGaps(prev - 1);
      }
    }
    checkKeyGaps(prev);
    // console.log(outfitDisplay);
  }

  // console.log('outfit:', outfit)
  // console.log('display:', outfitDisplay);


  return (
    <div>
      <ul className="RC_outfit_list">
        <button
        className="RC_prev"
        onClick={handlePrevClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
          <li className="RC_outfit_card_container">
            <div
            className="RC_add_to_outfit"
            onClick={handleAddToOutfit}>
              <i
              className="fa-solid fa-plus plus"></i>
              <div
              className="RC_outfit_add_text">
                Add To Outfit
              </div>
            </div>
          </li>
        {addOutfit}
        <button
        className="RC_next"
        onClick={handleNextClick}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </ul>
    </div>
  )
}

export default OutfitList;


