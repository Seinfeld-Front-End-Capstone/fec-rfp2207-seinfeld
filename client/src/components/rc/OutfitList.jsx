import React, {useState, useEffect, useCallback} from 'react';
import OutfitCard from './OutfitCard.jsx';


 /* *** Renders a list of items in the Your Outfit component *** */

const OutfitList = ({ id, setProduct }) => {
  const [outfit, setOutfit] = useState([]);
  const [index, setIndex] = useState(0);
  const [outfitDisplay, setOutfitDisplay] = useState([]);

  /* adds a new card to the list */
  const addOutfit = outfitDisplay.map((item) => {
    return <OutfitCard key={item} itemNo={item} productID={id}
    deleteCard={setOutfit} deleteCardDisplay={setOutfitDisplay}
    curOutfit={outfit} curDisplay={outfitDisplay} setOVProduct={setProduct}/>
  });

  /* handles card rendering */

  //when add to outfit is clicked,
    // this should add the new card to both display (until there are 3 cards) and outfit.
  const renderCards = () => {
    setOutfit(prevOutfit => [...prevOutfit, id]);
    if (outfitDisplay.length < 4) {
      setOutfitDisplay(prevDisplay => [...prevDisplay, id]);
    }
  }

  /* handles click of next arrow button */
  const handleNextClick = (e) => {
    e.preventDefault();

    console.log('outfit:', outfit)
    console.log('display:', outfitDisplay);
  }

  /* handles click of previous arrow button */
  const handlePrevClick = (e) => {
    e.preventDefault();


    console.log(outfit);
    console.log(outfitDisplay);
  }

  console.log('outfit:', outfit)
  console.log('display:', outfitDisplay);


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
            onClick={renderCards}>
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


