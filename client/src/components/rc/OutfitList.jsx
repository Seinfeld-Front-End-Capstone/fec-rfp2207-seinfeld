import React, {useState, useEffect, useCallback} from 'react';
import OutfitCard from './OutfitCard.jsx';


 /* *** Renders a list of items in the Your Outfit component *** */

const OutfitList = ({ id }) => {
  const [outfit, setOutfit] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [outfitDisplay, setOutfitDisplay] = useState([]);

  /* adds a new card to the list */
  const addOutfit = outfit.map((item) => {
    return <OutfitCard key={item} itemNo={item} productID={id} deleteCard={setOutfit} curOutfit={outfit} />
  });

  /* handles the + button being clicked */
  const handleAddToOutfit = (e) => {
    e.preventDefault();
    setOutfit(prevOutfit => [...prevOutfit, cardCount]);
    setCardCount(prevCount => prevCount + 1);
  }

  //when a card is added to the outfit list, also add it to display. after 3 cards are added, don't add any more to display unless > button is clicked. Then, push the next card in line to the display. if < is clicked, unshift the card that comes before whatever the card at [0] is. That way, only 3 cards will be shown at once. The add card should stay in place at all times.

  return (
    <div>
      <h5>Your Outfit</h5>
      <button
      className="RC_prev"
      onclick={null}>
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
      onclick={null}>
        {">"}
      </button>
    </div>
  )
}

export default OutfitList;


