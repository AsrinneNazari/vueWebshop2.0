import type { ICartItem } from "./ICartItem";
import type { IOneDrink } from "./IOneDrink";


export interface IDrinkalot {
  drinks: IOneDrink[];
  cart: ICartItem[];
  showCheckout: boolean;
}
