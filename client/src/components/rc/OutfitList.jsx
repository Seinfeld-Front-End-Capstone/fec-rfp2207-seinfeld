import React, {useState, useEffect} from 'react';
import OutfitCard from './OutfitCard.jsx';

//use state to keep track of items in the outfit list,
  //render each one to the list as a card.

const OutfitList = ({ id }) => {
  const [outfit, setOutfit] = useState([]);
  const [cardCount, setCardCount] = useState(0);


  useEffect(() => {
    deleteCard();
  },[])

  /* adds a new card to the list */
  const addOutfit = outfit.map((item) => {
    return <li key={item}  className="RC_outfit_card_container"><OutfitCard productID={id} deleteCard={deleteCard}/></li>
  });

  /* handles the + button being clicked */
  const handleAddToOutfit = (e) => {
    e.preventDefault();
    //on click, create a new card id and add it to state
      //then, create a new card and assign it the id.
    setCardCount(prevCount => prevCount + 1);
    setOutfit(prevOutfit => [...prevOutfit, cardCount]);
  }

  console.log('cardCounter:', cardCount);
  console.log('outfit:', outfit);

  //add a function that deletes a card when X button is clicked -- delete from state
  const deleteCard = () => {
    setOutfit([...outfit.splice(cardCount - 1, 1)]);
  }



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


