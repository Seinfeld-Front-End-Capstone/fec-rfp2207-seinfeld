import React, {useState, useEffect, useCallback} from 'react';
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";

const OutfitCard = ({ itemNo, productID, deleteCard, deleteCardDisplay, curOutfit, curDisplay, onDelete, setOVProduct }) => {
  const [productData, setProductData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [price, setPrice] = useState([]);
  const [starRating, setStarRating] = useState(0);


  useEffect(() => {
    request
      .getStyles(productID)
      .then((data) => {
        setPhotoData(data.data.results[0].photos[0].url);
        if (data.data.results[0].sale_price) {
          setPrice(data.data.results[0].sale_price);
        } else {
          setPrice(data.data.results[0].original_price);
        }
      })
      .catch((err) => {
        console.log("This is an outfit card error:", err);
      });
    request
      .getProductInfo(productID)
      .then((data) => {
        setProductData(data.data);
      })
      .catch((err) => {
        console.log("This is an outfit card error:", err);
      });
    request
      .getReviewMeta(productID)
      .then((data) => {
        AvgStarRating(data.data.ratings, (avg) => {
          return setStarRating(avg);
        });
      })
      .catch((err) => {
        console.log("This is an outfit card error:", err);
      });
  }, []);

  /* handles delete button onClick event */
  const handleDelete = useCallback(() => {

    deleteCard(curOutfit.filter((item) => item !== itemNo));
    deleteCardDisplay(curDisplay.filter((item) => item !== itemNo));

    const populateList = () => {
      if (curOutfit.length > 2) {
        if (curDisplay.length < 4) {
        curOutfit.forEach((card) => {
            if (curDisplay.indexOf(card) === -1) {
              deleteCardDisplay(prevDisplay => [...prevDisplay, card]);
            }
          })
        }
      }
    }

    populateList();

  }, [deleteCard, curOutfit, curDisplay]);

  const checkVis = () => {
    if (curDisplay.indexOf(itemNo) !== -1) {
      setVis(true);
    }
  }

  const handleProductClick = (e) => {
    e.preventDefault();
    setOVProduct(prevData => productData);
  };


  if (curDisplay.indexOf(itemNo) !== -1) {
    return (
      <div
      key={itemNo}
      style={{backgroundImage: `url(${photoData})`}}
      onClick={handleProductClick}
      className="RC_outfit_card_container">
      <aside>
        <i
        className="fa-solid fa-circle-xmark RC_x"
        onClick={handleDelete}>
        </i>
        <div className="RC_outfit_text_container">
          <h6
            className="RC_product_category RC_text">
              <em>{productData.category}</em>
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
      </aside>
    </div>
  )
  }
}

export default OutfitCard;