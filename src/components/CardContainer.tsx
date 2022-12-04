import React from "react";
import { useRecoilState } from "recoil";
import CartItem from "./CartItem";
import { cartItemState } from "../features/Atoms/CartAtom";

const CardContainer = () => {
  const [cartItem, setCartItem] = useRecoilState(cartItemState);

  const clearCart = (): void => {
    return setCartItem({
      cartItems: [],
      amount: 0,
      total: 0,
    });
  };

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
        <button className="btn clear-btn" onClick={() => clearCart()}>
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
