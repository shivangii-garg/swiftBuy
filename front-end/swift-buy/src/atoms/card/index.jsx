import React from "react";
import "../../genericCSS.css";
const Card = ({
  className = "card",
  innerCardClassName = "inner-card",
  imgClassName = "card-img",
  imgSrc,
  imgAlt,
  cardDetailClassName = "card-item-details",
  itemNameClassname = "item-name",
  itemCodeClassname = "item-code",
  itemPriceClassname = "item-price",
  itemName,
  itemCode,
  itemPrice,
}) => {
  return (
    <div className={className}>
      <div className={innerCardClassName}>
        <img className={imgClassName} src={imgSrc} alt={imgAlt} />
      </div>
      <div className={cardDetailClassName}>
        <span className={itemNameClassname}>{itemName}</span>
        <span className={itemCodeClassname}>{itemCode}</span>
        <span className={itemPriceClassname}>{itemPrice}</span>
      </div>
    </div>
  );
};

export default Card;
