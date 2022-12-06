import { MinusIcon, PlusIcon } from "../heroIcons";
import { cartItemContent } from "../cartItems";
import { useRecoilState } from "recoil";
import { cartItemState } from "../features/Atoms/CartAtom";

const CartItem = (props: cartItemContent) => {
  const { img, id, title, price, amount } = props;
  const [cartItem, setCartItem] = useRecoilState(cartItemState);

  const removeItem = (id: number) => {
    const newCartItem = cartItem.cartItems.filter((item) => {
      return id !== item.id;
    });
    setCartItem({
      cartItems: newCartItem,
      amount: cartItem.amount,
      total: cartItem.total,
    });
  };

  const increaseAmount = (id: number) => {
    let targetCartItem = cartItem.cartItems.find(
      (item) => item.id === id
    ) as cartItemContent;

    console.log(targetCartItem.amount += 1);
  };

  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          削除
        </button>
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => console.log("hoge")}>
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
