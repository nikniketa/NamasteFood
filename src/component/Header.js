import { useContext, useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineCheck from "../utils/useOnlineCheck";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineCheck();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="px-24 py-7 shadow-lg ">
      <div className="flex justify-between items-center w-4/5 m-auto">
        <div className="w-12 h-12 rounded-xl overflow-hidden">
          <Link to="/">
            <img src={LOGO_IMG} className="w-full" />
          </Link>
        </div>
        <ul className="flex text-base font-medium">
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
          <li className="mr-5 ">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
          <li className="mr-5 ">{btnText == "Login" && loggedInUser}</li>
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
