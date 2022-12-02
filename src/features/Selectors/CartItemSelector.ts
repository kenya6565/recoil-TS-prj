import { cartItem } from "./../../interfaces/cartItem";
import { selector } from "recoil";
import { cartItemState } from "../Atoms/CartAtom";

export const cartItemSelector = selector<object>({
  key: "cartItemSelector",
  get: ({ get }) => {
    const cartItem: object = get(cartItemState);
    return cartItem;
  },
});
