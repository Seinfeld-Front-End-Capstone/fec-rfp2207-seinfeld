import React, { useState, useEffect } from "react";
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";
import ComparisonModal from './ComparisonModal.jsx';
//takes in the item id and populates each element of the card with relevent info.

const RelatedItemCard = ({ pID }) => {
  const [productData, setProductData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [price, setPrice] = useState([]);
  const [starRating, setStarRating] = useState(0);
  const [pop, setPop] = useState(false);


  useEffect(() => {
    request
      .getStyles(pID)
      .then((data) => {
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
  }, []);

  // need little star button -- Might have to grab from font awesome or something similar -- done
  //on click, the star button opens a pop-up window that shows a comparison between the item on the current overview and the item on the related list.

  const handlePopToggle = (event) => {
    //do stuff. make popup window.
    event.preventDefault();
    setPop(true);
  }

  return (
    <div>
      <aside>
        <img src={photoData} height="175" />
        <i className="fa-solid fa-star" onClick={handlePopToggle}></i>
        <h6>{productData.category}</h6>
        <h5>{productData.name}</h5>
        <p>
          <small>{price}</small>
        </p>
        <Stars rating={starRating} />
      </aside>
      {pop ? <ComparisonModal toggle={handlePopToggle} overviewItem={pID} relatedItem={productData} /> : null}
    </div>

  );
};

export default RelatedItemCard;
