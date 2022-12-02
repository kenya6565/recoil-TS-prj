import { cartItem } from "./../../interfaces/cartItem";
import { selector } from "recoil";
import { cartItemState } from "../Atoms/CartAtom";

export const cartItemSelector = selector<cartItem>({
  key: "cartItemSelector",
  get: ({ get }) => {
    const cartItem: cartItem = get(cartItemState);
    return cartItem;
  },
});
