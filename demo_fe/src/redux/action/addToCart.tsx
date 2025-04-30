
// actions/cartActions.ts
import { Dispatch } from 'redux';
// import { addProductToCart } from '../api/cartApi'; // Import hàm bạn vừa tạo
import { Product,ADD_TO_CART } from '../../type/UserType';

// Thêm async action creator để xử lý thêm sản phẩm vào giỏ hàng
export const addToCart = (product: Product) => {
  return async (dispatch: Dispatch) => {
    try {
      // Gọi API để thêm sản phẩm vào giỏ hàng
    //   await addProductToCart(product);

      // Dispatch action sau khi API call thành công
      dispatch({
        type: ADD_TO_CART,
        payload: product
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
};
