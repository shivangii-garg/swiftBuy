import React from "react";
import { title } from "../../utils";
import "./footer.css";
import CategoryContainer from "../../atoms/categoryContainer";

const categoryItems = [
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  " Video Games & Consoles",
  "Waterproof Headphones",
];

const custCareItems = [
  "My Acount",
  "Discount",
  "Returns",
  "Order History",
  "Order Tracking",
];

const pagesItems = [
  "Blog",
  "Browse the Shop",
  "Category",
  "Pre-Built Pages",
  "Visual Composer Elements",
  "WooCommerce Pages",
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-inner-sec">
          <span className="footer-title">{title}</span>
          <div className="sign-up-btn">
            <input
              className="footer-input"
              type="text"
              placeholder="Enter Email Address"
            ></input>
            <button className="footer-btn">Sign Up</button>
          </div>
          <p className="footer-content">Contact Info</p>{" "}
          <p className="footer-content-add">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div className="footer-right">
          <CategoryContainer heading="Category" items={categoryItems} />
          <CategoryContainer heading="Customer Care" items={custCareItems} />
          <CategoryContainer heading="Pages" items={pagesItems} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
