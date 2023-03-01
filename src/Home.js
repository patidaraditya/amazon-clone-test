import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/I/71PO0B7z7DL._SX3000_.jpg"
        alt=""
        className="home_image"
      />
      <div className="home_row">
        <Product
          id={1223455}
          title={"Up to 70% off | Clearance store"}
          price={151.96}
          rating={4}
          image={"https://m.media-amazon.com/images/I/51Wv68cLZVL._SX679_.jpg"}
        />
        <Product
          id={1223455}
          title={"Up to 70% off | Clearance store"}
          price={114.96}
          rating={4}
          image={"https://m.media-amazon.com/images/I/51x68cPn5pL._SX522_.jpg"}
        />
      </div>
      <div className="home_row">
        <Product
          id={1223455}
          title={"Up to 70% off | Clearance store"}
          price={81.96}
          rating={4}
          image={"https://m.media-amazon.com/images/I/71T7mTX-OjL._SX679_.jpg"}
        />
        <Product
          id={1223455}
          title={"Up to 70% off | Clearance store"}
          price={51.96}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
          }
        />
        <Product
          id={1223455}
          title={"Up to 70% off | Clearance store"}
          price={36.96}
          rating={4}
          image={"https://m.media-amazon.com/images/I/51B31ZS0DDL._SX679_.jpg"}
        />
      </div>

      <div className="home_row">
        <Product
          id={1223455}
          title={"Up to 70% off | Clearance store"}
          price={10.9}
          rating={4}
          image={"https://m.media-amazon.com/images/I/81DTJDIKkGL._SX522_.jpg"}
        />
      </div>
    </div>
  );
}

export default Home;
