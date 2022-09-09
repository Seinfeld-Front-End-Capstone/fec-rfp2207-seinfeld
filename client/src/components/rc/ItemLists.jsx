import React, { useState, useEffect, useRef} from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import stylists from '../../assets/stylists.png';

/* contains related items and outfit lists */

const ItemLists = ({ productId, setProduct }) => {
  const [stylistsVisible, setStylistsVisible] = useState(false);
  const myRef = useRef();
  console.log('element is visible', stylistsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('entry', entry);
      setStylistsVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current);
  })

  return(
    <div
    className="RC_item_lists_container">
      <div>
        <h5 className="RC_h5">Related Items</h5>
      </div>
      <div
      className="RC_card_container">
        <RelatedList
        id={productId}
        setProduct={setProduct}/>
      </div>
      <div>
        <h5 ref={myRef} className="RC_h5">Your Outfit</h5>
      </div>
      <div
      className="RC_outfit_container">
        <OutfitList
        id={productId}/>
        {stylistsVisible && <div id="stylists-ctn">
          {<img id="stylists-background" src={stylists} />}
        </div>}
      </div>
    </div>
  )
}

export default ItemLists;