import React, {useState, useEffect, useCallback} from 'react';
import OutfitCard from './OutfitCard.jsx';

//use state to keep track of items in the outfit list,
  //render each one to the list as a card.

const OutfitList = ({ id }) => {
  const [outfit, setOutfit] = useState([]);
  const [cardCount, setCardCount] = useState(0);



  /* adds a new card to the list */
  const addOutfit = outfit.map((item) => {
    return <OutfitCard key={item} itemNo={item} productID={id}  />
  });

  /* handles the + button being clicked */
  const handleAddToOutfit = (e) => {
    e.preventDefault();
    setOutfit(prevOutfit => [...prevOutfit, [cardCount, true]]);
    setCardCount(prevCount => prevCount + 1);
  }

  handleDeleteCard = (e) => {
    //splice the
  }

  console.log('cardCounter:', cardCount);
  console.log('outfit:', outfit);

  return (
    <div>
      <h5>Your Outfit</h5>
      <ul className="RC_outfit_list">
        <li className="RC_outfit_card_container">
          <aside className="RC_add_to_outfit">
            <i className="fa-solid fa-plus" onClick={handleAddToOutfit}></i>
            <p className="RC_outfit_add_text">Add To Outfit</p>
          </aside>
        </li>
        {addOutfit}
      </ul>
    </div>
  )
}

export default OutfitList;


