import React from "react";
import { useRecoilValue } from "recoil";
import { cartItemSelector } from "../features/Selectors/CartItemSelector";
import { cartItem } from "../interfaces/cartItem";

const Navbar = () => {
  const cartItem: cartItem = useRecoilValue(cartItemSelector);
  return (
    <div className="nav-center">
      <h3>Recoil Shopping</h3>
      <div className="nav-container">
        <div className="amount-container">
          <p className="total-amount">{cartItem.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
