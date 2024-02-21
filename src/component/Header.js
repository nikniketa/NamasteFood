import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineCheck from "../utils/useOnlineCheck";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineCheck();
  return (
    <div className="h-20 px-24 py-7 shadow-lg ">
      <div className=" max-w-[1200px] flex justify-between">
        <div>
          <Link to="/">
            <img src={LOGO_IMG} className="h-10" />
          </Link>
        </div>
        <ul className="flex">
          <li className="mr-5 ">
            {onlineStatus == "online" ? "green" : "red"}
          </li>
          <li className="mr-5 ">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5 ">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5 ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-5 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              onClick={() => {
                btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
