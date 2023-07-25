import React from "react";
import "../../genericCSS.css";

const CategoryContainer = ({
  className = "category-container",
  headingClassName = "footer-rows-heading",
  heading,
  itemsClassName = "footer-rows-items",
  itemClassName = "footer-rows-item",
  items,
}) => {
  return (
    <div className={className}>
      <span className={headingClassName}>{heading}</span>
      <div className={itemsClassName}>
        {items.map((item) => {
          return (
            <a href="#" className={itemClassName}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryContainer;
