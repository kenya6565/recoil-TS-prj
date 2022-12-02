import { atom } from "recoil";
import cartItems from "../../cartItems";
import { cartItem } from "../../interfaces/cartItem";

export const cartItemState = atom<cartItem>({
  key: "cartState",
  default: {
    cartItems: cartItems,
    amount: 1,
    total: 0,
  },
});
