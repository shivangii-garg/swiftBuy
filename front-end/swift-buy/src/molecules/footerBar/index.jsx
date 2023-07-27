import React from "react";
import "./footerBar.css";
import fb from "../../images/fb.svg";
import insta from "../../images/insta.svg";
import twitter from "../../images/twitter.svg";
import ellipse from "../../images/ellipse.svg";

const FooterBar = () => {
  return (
    <div className="footer-bar">
      <span className="footer-bar-copyright">
        ©Webecy - All Rights Reserved
      </span>
      <div className="footer-bar-links">
        <div className="ellipse-container">
          <a href="https://www.facebook.com/" target="blank">
            <img className="icon" src={fb} alt="fb-icon" />
            <img className="ellipse-image " src={ellipse} alt="ellipse-icon" />
          </a>
        </div>
        <div className="ellipse-container">
          <a href="https://www.instagram.com/" target="blank">
            <img className="icon" src={insta} alt="insta-icon" />
            <img className="ellipse-image " src={ellipse} alt="ellipse-icon" />
          </a>
        </div>
        <div className="ellipse-container">
          <a href="https://twitter.com/" target="blank">
            <img className="icon" src={twitter} alt="twitter-icon" />
            <img className="ellipse-image " src={ellipse} alt="ellipse-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterBar;
