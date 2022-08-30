import React, { useState, useEffect } from "react";
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";
import ComparisonModal from './ComparisonModal.jsx';
//takes in the item id and populates each element of the card with relevent info.


const RelatedItemCard = ({ pID }) => {

  request.getProductInfo(pID)
    .then((data) => {
      // console.log('data:', data)
    })
    
const RelatedItemCard = ({ pID, ogID }) => {
  const [productData, setProductData] = useState([]);
  const [ovItem, setOVItem] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [price, setPrice] = useState([]);
  const [ovItemPrice, setOVItemPrice] = useState([]);
  const [starRating, setStarRating] = useState(0);
  const [pop, setPop] = useState(false);


  useEffect(() => {
    request
      .getStyles(pID)
      .then((data) => {
        // console.log('styles data:', data.data);
        setPhotoData(data.data.results[0].photos[0].url);
        if (data.data.results[0].sale_price) {
          setPrice(data.data.results[0].sale_price);
        } else {
          setPrice(data.data.results[0].original_price);
        }
      })
      .catch((err) => {
        console.log("This is a RelatedItemCard error:", err);
      });
    request
      .getProductInfo(pID)
      .then((data) => {
        // console.log('prod info:', data.data);
        setProductData(data.data);
      })
      .catch((err) => {
        console.log("This is a RelatedItemCard error:", err);
      });
    request
      .getReviewMeta(pID)
      .then((data) => {
        AvgStarRating(data.data.ratings, (avg) => {
          return setStarRating(avg);
        });
      })
      .catch((err) => {
        console.log("This is a RelatedItemCard error:", err);
      });
    request
      .getProductInfo(ogID)
      .then((data) => {
        // console.log('prod info:', data.data);
        setOVItem(data.data);
      })
      .catch((err) => {
        console.log("This is a RelatedItemCard error:", err);
      });
    request
      .getStyles(ogID)
      .then((data) => {
        // console.log('styles data:', data.data);
        if (data.data.results[0].sale_price) {
          setOVItemPrice(data.data.results[0].sale_price);
        } else {
          setOVItemPrice(data.data.results[0].original_price);
        }
      })
      .catch((err) => {
        console.log("This is a RelatedItemCard error:", err);
      });
  }, []);

  // need little star button -- Might have to grab from font awesome or something similar -- done
  //on click, the star button opens a pop-up window that shows a comparison between the item on the current overview and the item on the related list.

  const handlePopToggle = (e) => {
    //do stuff. make popup window.
    e.preventDefault();
    setPop(true);
  }

  console.log('pop:', pop);


  return (
    <div>
      <aside className="RC_card">
        <img className="RC_card_photo" src={photoData} height="225" />
        <i className="fa-solid fa-star" onClick={handlePopToggle}></i>
        <h6 className="RC_product_category">{productData.category}</h6>
        <h5 className="RC_product_name">{productData.name}</h5>
        <p>
          <small className="RC_product_price">{price}</small>
        </p>
        <Stars rating={starRating} />
      </aside>
      {pop ? <ComparisonModal toggle={setPop} overviewItem={ovItem} relatedItem={productData} relatedPrice={price} ovPrice={ovItemPrice}/> : null}
    </div>

  );
};

export default RelatedItemCard;
