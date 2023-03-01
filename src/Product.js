import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{basket},dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: props.id,
        title: props.title,
        price: props.price,
        rating: props.rating,
        image: props.image,
      }
    })
  }

  return (
    <div className="product">

      <div className="product_info">

        <p>{props.title}</p>

        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

      </div>

      <img src={props.image} alt="" />

      <button className="addToCartButton" onClick={addToBasket}>Add to basket</button>
      
    </div>
  );
}

export default Product;
