import { atom } from "recoil";
import cartItems from "../../cartItems";

export const cartState = atom<object>({
  key: "cartState",
  default: {
    cartItems: cartItems,
    amount: 1,
    total: 0,
  },
});
