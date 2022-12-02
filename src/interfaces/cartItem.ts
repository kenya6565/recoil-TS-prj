import cartItems from "../cartItems";
export type CARTITEMS = typeof cartItems;

export interface cartItem {
  cartItems: CARTITEMS;
  amount: number;
  total: number;
}
