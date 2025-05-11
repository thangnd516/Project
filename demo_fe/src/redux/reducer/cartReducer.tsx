import { ADD_TO_CART, CartItem, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../../type/UserType";
import { CartAction } from "../action/cartActions";

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('object', state)
      const existing = state.cartItems.find(i => i.productId === action.payload.productId);

      // payload: {
      //   productId: product.id,
      //   name: product.name,
      //   price: product.price,
      //   image: product.images?.[0]?.url || "",
      //   quantity: 1, // hoặc quantity nếu muốn lấy state hiện tại
      // }

      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(i =>
            i.productId === action.payload.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(i => i.productId !== action.payload),
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(i =>
          i.productId === action.payload
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(i =>
          i.productId === action.payload
            ? { ...i, quantity: Math.max(1, i.quantity - 1) }
            : i
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
