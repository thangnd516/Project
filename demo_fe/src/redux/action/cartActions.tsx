import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../../type/UserType";
import { CartItem } from "../../type/UserType";

export type CartAction =
  | { type: typeof ADD_TO_CART; payload: CartItem }
  | { type: typeof REMOVE_FROM_CART; payload: number }
  | { type: typeof INCREMENT_QUANTITY; payload: number }
  | { type: typeof DECREMENT_QUANTITY; payload: number };
