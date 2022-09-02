import React, {useState, useEffect, useCallback} from 'react';
import OutfitCard from './OutfitCard.jsx';


 /* *** Renders a list of items in the Your Outfit component *** */

const OutfitList = ({ id }) => {
  const [outfit, setOutfit] = useState([]);
  const [cardCount, setCardCount] = useState(0);

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

  return (
    <div>
      <h5>Your Outfit</h5>
      <ul className="RC_outfit_list">
        <div className="RC_outfit_card_container">
          <li>
            <aside
            className="RC_add_to_outfit">
              <i
              className="fa-solid fa-plus plus"
              onClick={handleAddToOutfit}></i>
              <p
              className="RC_outfit_add_text">
                Add To Outfit
              </p>
            </aside>
          </li>
        </div>
        {addOutfit}
      </ul>
    </div>
  )
}

export default OutfitList;


