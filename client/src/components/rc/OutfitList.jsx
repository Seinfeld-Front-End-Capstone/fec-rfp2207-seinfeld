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

  //when a card is added to the outfit list, also add it to display. after 3 cards are added, don't add any more to display unless > button is clicked. Then, push the next card in line to the display. if < is clicked, unshift the card that comes before whatever the card at [0] is. That way, only 3 cards will be shown at once. The add card should stay in place at all times. // if card exists within the outfit array AND the display array, display it.

  console.log('display:', outfitDisplay);
  const handleNextClick = (e) => {
    // there should only ever be 3 outfit cards displayed at a time.
    e.preventDefault();
    //find the value of the last element in the display array,
      //check to find the same in the outfit array,
      var next = outfitDisplay[2] + 1;
      console.log('next:', next);
      // pushing the next element of outfit array onto the end of display array
      setOutfitDisplay(outfitDisplay.filter((item) => item !== outfitDisplay[0]));
      setOutfitDisplay(prevDisplay => [...prevDisplay, next]);
      //shift the first element in display out of the array while
      console.log('display:', outfitDisplay);
  }



  return (
    <div>
      <h5>Your Outfit</h5>
      <button
      className="RC_prev"
      onClick={null}>
        {"<"}
      </button>
      <ul className="RC_outfit_list">
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
      </ul>
      <button
      className="RC_next"
      onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  )
}

export default OutfitList;


