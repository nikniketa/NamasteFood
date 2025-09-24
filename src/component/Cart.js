import React from "react";
import CategoryMenuItem from "./CategoryMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  handleClearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div className="w-6/12 m-auto p-4">
      <h1 className="text-center font-bold text-lg">Cart</h1>
      <button
        className="m-auto bg-black text-white rounded-lg p-2 text-center"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <CategoryMenuItem itemCards={cartItems} />
    </div>
  );
};

export default Cart;
