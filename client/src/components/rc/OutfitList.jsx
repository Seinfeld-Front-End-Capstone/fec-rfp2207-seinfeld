import React from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = () => {
  return (
    <div>
      <h5>This will be the list of outfit items!</h5>
      <ul>
        for each item in the user's list of outfit items, a card will appear!
        <OutfitCard />
      </ul>
    </div>
  )
}

export default OutfitList;


