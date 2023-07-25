import React from "react";
import search from "../../images/search.svg";
import { title } from "../../utils";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <span className="navBar-logo">{title}</span>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Pages</a>
        <a href="#">Products</a>
        <a href="#">Blog</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </div>
      <button className="search">
        <input className="navbar-input" type="text"></input>
        <div className="navbar-search-box">
          <img src={search} alt="search" />
        </div>
      </button>
    </div>
  );
};

export default NavBar;
