import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_IMG} />
      </div>
      <ul className="navLink">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <button
          onClick={() => {
            btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
          }}
        >
          {btnText}
        </button>
      </ul>
    </div>
  );
};

export default Header;
