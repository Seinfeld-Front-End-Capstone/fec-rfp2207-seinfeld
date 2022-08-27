import React, {useState, useEffect} from 'react';
import request from '../../request.js';
//takes in the item id and populates each element of the card with relevent info.

const RelatedItemCard = ({ pID }) => {

  request.getProductInfo(pID)
    .then((data) => {
      // console.log('data:', data)
    })

  const [productData, setProductData] = useState([]);
  const [styleData, setStyleData] = useState([]);
  const [price, setPrice] = useState([]);

  // ****** what to do if item has no photos??? Bright Future Shades ****** \\

  useEffect(() => {
    request.getStyles(pID)
      .then((data) => {
        setStyleData(data.data.results[0].photos[0].url)
        // console.log('results:', data.data.results);
        if (data.data.results[0].sale_price) {
          setPrice(data.data.results[0].sale_price)
        } else {
          setPrice(data.data.results[0].original_price)
        }
      })
      .catch((err) => {
        alert('This is a RelatedItemCard error:', err);
      });
    request.getProductInfo(pID)
      .then((data) => {
        setProductData(data.data);
      })
      .catch((err) => {
        alert('This is a RelatedItemCard error:', err);
      });
  }, []);
    // need rating stars -- Thach put these somewhere
    // need little star button -- Might have to grab from font awesome or something similar


  return (
    <aside>
      <img src={styleData} height="175"/>
      <i className="fa-solid fa-star"></i>
      <h6>{productData.category}</h6>
      <h5>{productData.name}</h5>
      <p><small>{price}</small></p>
      <img />
    </aside>
  )
}

export default RelatedItemCard;