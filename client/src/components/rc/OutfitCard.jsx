import React, {useState, useEffect, useCallback} from 'react';
import request from "../../request.js";
import AvgStarRating from "../helpers/AvgStarRating.jsx";
import Stars from "../helpers/Stars.jsx";

//Okay this is going to be basically the same as the related item card but slightly different.

const OutfitCard = ({ itemNo, productID, deleteCard, curOutfit }) => {
  const [productData, setProductData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [price, setPrice] = useState([]);
  const [starRating, setStarRating] = useState(0);

  useEffect(() => {
    request
      .getStyles(productID)
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
        console.log("This is an outfit card error:", err);
      });
    request
      .getProductInfo(productID)
      .then((data) => {
        // console.log('prod info:', data.data);
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

  const handleDelete = useCallback(() => {
    deleteCard(curOutfit.filter((item) => item !== itemNo));
  }, [deleteCard, curOutfit]);



  return (
    <aside key={itemNo} className="RC_outfit_card_container">
      <img className="RC_outfit_photo" src={photoData} height="225" />
      <i className="fa-solid fa-circle-xmark" onClick={handleDelete}></i>
      <h6 className="RC_product_category">{productData.category}</h6>
      <h5 className="RC_product_name">{productData.name}</h5>
      <p>
        <small className="RC_product_price">{price}</small>
      </p>
      <Stars rating={starRating} />
    </aside>
  )
}

export default OutfitCard;