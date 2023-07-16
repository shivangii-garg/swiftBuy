import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-inner-sec">
          <span className="footer-title">SwiftBuy</span>
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
          <div className="category-container">
            <span className="footer-rows-heading">Categories</span>
            <div className="footer-rows-items">
              <a href="#" className="footer-rows-item">
                Laptops & Computers
              </a>
              <a href="#" className="footer-rows-item">
                Cameras & Photography
              </a>
              <a href="#" className="footer-rows-item">
                Smart Phones & Tablets
              </a>
              <a href="#" className="footer-rows-item">
                Video Games & Consoles
              </a>
              <a href="#" className="footer-rows-item">
                Waterproof Headphones
              </a>
            </div>
          </div>
          <div className="category-container">
            <span className="footer-rows-heading">Customer Care</span>
            <div className="footer-rows-items">
              <a href="#" className="footer-rows-item">
                My Acount
              </a>
              <a href="#" className="footer-rows-item">
                Discount
              </a>
              <a href="#" className="footer-rows-item">
                Returns
              </a>
              <a href="#" className="footer-rows-item">
                Order History
              </a>
              <a href="#" className="footer-rows-item">
                Order Tracking
              </a>
            </div>
          </div>
          <div className="category-container">
            <span className="footer-rows-heading">Pages</span>
            <div className="footer-rows-items">
              <a href="#" className="footer-rows-item">
                Blog
              </a>
              <a href="#" className="footer-rows-item">
                Browse the Shop
              </a>
              <a href="#" className="footer-rows-item">
                Category
              </a>
              <a href="#" className="footer-rows-item">
                Pre-Built Pages
              </a>
              <a href="#" className="footer-rows-item">
                Visual Composer Elements
              </a>
              <a href="#" className="footer-rows-item">
                WooCommerce Pages
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
