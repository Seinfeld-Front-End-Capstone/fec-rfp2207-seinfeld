import React, {useState, useEffect, useCallback} from 'react';
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";

const OutfitCard = ({ itemNo, productID, deleteCard, deleteCardDisplay, curOutfit, curDisplay }) => {
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
    // delete card from display state array AND from the outfit array \\
    deleteCard(curOutfit.filter((item) => item !== itemNo));
    deleteCardDisplay(curDisplay.filter((item) => item !== itemNo));
  }, [deleteCard, curOutfit, curDisplay]);



  return (
    <div
    key={itemNo}
    className="RC_outfit_card_container">
      <aside>
        <img
        className="RC_outfit_photo" src={photoData} height="225"
        />
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
            className="RC_product_name RC_text">
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

export default OutfitCard;