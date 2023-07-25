import React from "react";
import ad from "../../images/ad.png";
import "./body.css";
import Card from "../../atoms/card";
import { featuredProducts } from "../../utils/featuredProducts";

const Body = () => {
  return (
    <div className="body">
      <span className="body-title">Featured Products</span>
      <div className="featured-products">
        {featuredProducts.map((item) => {
          return (
            <Card
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              itemName={item.itemName}
              itemCode={item.itemCode}
              itemPrice={item.itemPrice}
            />
          );
        })}
      </div>
      <img className="ad" src={ad} alt="ad" />
    </div>
  );
};

export default Body;
