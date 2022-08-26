import React, {useState, useEffect} from 'react';
import request from '../../request.js';
//takes in the item id and populates each element of the card with relevent info.

const RelatedItemCard = ({ pID }) => {
  const [productData, setProductData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    request.getStyles(pID)
      .then((data) => {
        setStyleData(data.data.results[0].photos[0].url)
        console.log(data.data.results);
        if (data.data.results[0].sale_price) {
          setPrice(data.data.results[0].sale_price)
        } else {
          setPrice(data.data.results[0].original_price)
        }
      });
    request.getProductInfo(pID)
      .then((data) => {
        setProductData(data.data);
      });
  }, []);
    // need rating stars -- Thach put these somewhere
    // need little star button -- Might have to grab from font awesome or something similar

  return (
    <aside>
      <img src={styleData} height="175"/>
      <img />
      <h6>{productData.category}</h6>
      <h5>{productData.name}</h5>
      <p><small>{price}</small></p>
      <img />
    </aside>
  )
}

export default RelatedItemCard;