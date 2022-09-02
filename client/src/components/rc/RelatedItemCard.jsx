import React, { useState, useEffect } from "react";
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";
import ComparisonModal from './ComparisonModal.jsx';

/* *** Cards for each item in the list of related products *** */

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

  return (
    <li
      className="RC_related_card_list_item">
      <aside
        className="RC_card">
        <div className="RC_card_photo_container">
          <img
            className="RC_card_photo"
            src={photoData}
            height="225"
          />
          <i
            className="fa-solid fa-star compare_star"
            onClick={handlePopToggle}>
          </i>
        </div>
        <p
          className="RC_product_category RC_text">
          <small>
            <em>{productData.category}</em>
          </small>
        </p>
        <h5
          className="RC_product_name RC_text">
          {productData.name}
        </h5>
        <p>
          <small
            className="RC_product_price RC_text">
              {price}
          </small>
        </p>
        <Stars
          rating={starRating} />
      </aside>
      {pop ? <ComparisonModal toggle={setPop} overviewItem={ovItem} relatedItem={productData} relatedPrice={price} ovPrice={ovItemPrice}/> : null}
    </li>

  );
};

export default RelatedItemCard;
