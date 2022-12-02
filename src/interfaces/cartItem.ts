import cartItems from "../cartItems";
type CARTITEMS = typeof cartItems;

export interface cartItem {
  cartItems: CARTITEMS[];
  amount: number;
  total: number;
}
