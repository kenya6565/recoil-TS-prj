import React from "react";
import { useRecoilValue } from "recoil";
import { cartItemSelector } from "../features/Selectors/CartItemSelector";
import { cartItem } from "../interfaces/cartItem";
import CartItem from './CartItem';

const CardContainer = () => {
  const cartItem: cartItem = useRecoilValue(cartItemSelector);

  if (cartItem.amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません....🐱</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItem.cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{cartItem.total}円</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => console.log("hoge")}>
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
