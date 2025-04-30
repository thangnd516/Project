import { ADD_TO_CART,Product } from '../../type/UserType';

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload], // Thêm sản phẩm vào giỏ hàng
      };
    default:
      return state;
  }
};

export default cartReducer;
