import React, {useState, useEffect, useCallback} from 'react';
import OutfitCard from './OutfitCard.jsx';


 /* *** Renders a list of items in the Your Outfit component *** */

const OutfitList = ({ id }) => {
  const [outfit, setOutfit] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [outfitDisplay, setOutfitDisplay] = useState([]);

  /* adds a new card to the list */
  const addOutfit = outfitDisplay.map((item) => {
    return <OutfitCard key={item} itemNo={item} productID={id} deleteCard={setOutfit} deleteCardDisplay={setOutfitDisplay} curOutfit={outfit} curDisplay={outfitDisplay}/>
  });

  /* handles the + button being clicked */
  const handleAddToOutfit = (e) => {
    e.preventDefault();
    setOutfit(prevOutfit => [...prevOutfit, cardCount]);
    if (outfitDisplay.length < 3) {
      setOutfitDisplay(prevDisplay => [...prevDisplay, cardCount]);
    }
    setCardCount(prevCount => prevCount + 1);
  }

  const handleNextClick = (e) => {
    e.preventDefault();
    var next = outfitDisplay[2] + 1;
    if (outfit.indexOf(next) !== -1) {
      setOutfitDisplay(outfitDisplay.filter((item) => item !== outfitDisplay[0]));
      setOutfitDisplay(prevDisplay => [...prevDisplay, next]);
    }
  }

  const handlePrevClick = (e) => {
    e.preventDefault();
    var prev = outfitDisplay[0] - 1;
    if (outfit.indexOf(prev) !== -1) {
      setOutfitDisplay(outfitDisplay.filter((item) => item !== outfitDisplay[2]));
      setOutfitDisplay(prevDisplay => [prev, ...prevDisplay]);
    }
  }


  return (
    <div>
      <h5>Your Outfit</h5>
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
              <p
              className="RC_outfit_add_text">
                Add To Outfit
              </p>
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


