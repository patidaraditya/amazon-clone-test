import React, { useEffect, useState } from "react";
import "./Payment.css";
import {db} from './firebase'
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { collection, doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  const navigateTo = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${parseInt(getBasketTotal(basket) * 100 )}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setProcessing(true);

   
     

      const ordersDocRef = doc(db, "users", user?.uid);
       setDoc(ordersDocRef, {
        orders:{
          basket,
          amount:12334, 
          created: 223311, 
        }
        })

          

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigateTo('../orders',{replace:true});
      
  };
 
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React</p>
            <p>indore</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeperator={true}
                  prefix="$"
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
