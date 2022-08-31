import React from 'react';
import OutfitCard from './OutfitCard.jsx';

const OutfitList = () => {
  return (
    <div>
      <h5>Your Outfit</h5>
      <ul className="RC_outfit_list">
        <OutfitCard />
      </ul>
    </div>
  )
}

export default OutfitList;


