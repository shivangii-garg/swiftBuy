import React from "react";
import chairOne from "../../images/chair-one.png";
import ad from "../../images/ad.png";
import "./body.css";

const card = (
  <div className="card">
    <div className="inner-card">
      <img className="card-img" src={chairOne} alt="chair" />
    </div>
    <div className="card-item-details">
      <span className="item-name">Cantilever chair</span>
      <span className="item-code">Code - Y523201</span>
      <span className="item-price">$42.00</span>
    </div>
  </div>
);

const cardArray = Array(4).fill(card);

const Body = () => {
  return (
    <div className="body">
      <span className="body-title">Featured Products</span>
      <div className="featured-products">{cardArray}</div>
      <img className="ad" src={ad} alt="ad" />
    </div>
  );
};

export default Body;
