import React, { useState, useEffect, useCallback } from "react";
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";
import ComparisonModal from './ComparisonModal.jsx';

/* *** Cards for each item in the list of related products *** */

const RelatedItemCard = ({ pID, ogID, ovProduct, setOVProduct }) => {
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
    request
      .getProductInfo(ogID)
      .then((data) => {
        setOVItem(data.data);
      })
      .catch((err) => {
        console.log("This is a RelatedItemCard error:", err);
      });
    request
      .getStyles(ogID)
      .then((data) => {
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



  const handlePopToggle = (e) => {
    e.preventDefault();
    setPop(true);
  }

  const handleProductClick = (e) => {
    e.preventDefault();
    setOVProduct(prevData => productData);
  };


  return (
    <li
      className="RC_related_card_container">
      <div
      className="RC_related_card">
        <div className="RC_card_photo_container" style={{backgroundImage:`url(${photoData})`}} onClick={handleProductClick} />
        <i className="fa-solid fa-star compare_star" onClick={handlePopToggle}/>
        <div className="RC_related_text_container">
          <h6
            className="RC_product_category RC_text">
              <em>
                {productData.category}
              </em>
          </h6>
          <h5
            className="RC_product_name RC_text"
            onClick={handleProductClick}>
            {productData.name}
          </h5>
          <h6
            className="RC_product_price RC_text">
              {price}
          </h6>
        </div>
        <div
        className="RC_star_rating">
          <Stars
            rating={starRating} />
        </div>
      </div>
      {pop ? <ComparisonModal toggle={setPop} overviewItem=
{ovItem} relatedItem={productData} relatedPrice={price}
ovPrice={ovItemPrice}/> : null}
    </li>

  );
};

export default RelatedItemCard;
