import React from "react";
import "../../genericCSS.css";

const HeaderLink = ({
  className = "header-link",
  href = "#",
  linkText,
  imgSrc = null,
  imgAlt = null,
  linkStyle = null,
  imgStyle = null,
}) => {
  return (
    <a className={className} href={href} linkStyle={linkStyle}>
      {linkText}
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    </a>
  );
};

export default HeaderLink;
