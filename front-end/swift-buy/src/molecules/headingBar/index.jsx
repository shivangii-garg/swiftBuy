import "./headingBar.css";
import envelopeSvg from "../../images/envelope-icon.svg";
import phoneSvg from "../../images/phone-icon.svg";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";

const HeadingBar = () => {
  return (
    <div className="heading-bar">
      <div className="group-one">
        <img src={envelopeSvg} alt="envelope icon" className="envelope-icon" />
        <span className="typography">swiftBuy.help@gmail.com</span>
        <img src={phoneSvg} alt="envelope icon" className="phone-icon" />
        <span className="typography">(1234)56789</span>
      </div>
      <div className="group-two">
        <select>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Italian</option>
          <option>Portuguese</option>
          <option>Russian</option>
        </select>
        <select style={{ width: "17%" }}>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>CAD</option>
          <option>CNY</option>
          <option>MXN</option>
        </select>
        <a className="header-link" href="#">
          Login
          <img src={user} alt="user" />
        </a>
        <a className="header-link" href="#">
          Wishlist
          <img src={heart} alt="heart" />
        </a>
        <a href="#" className=" header-link cart">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </div>
  );
};

export default HeadingBar;
