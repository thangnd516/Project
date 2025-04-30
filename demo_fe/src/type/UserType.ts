// userTypes.ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string;
  }
  
  export interface UserState {
    account: {
      access_token: string;
      refresh_token: string;
      username: string;
      image: string;
      role: string;
    };
    isAuthenticated: boolean;
  }
  
  export const SET_USER = 'SET_USER';
  export const LOGOUT_USER = 'LOGOUT_USER';
  export const ADD_TO_CART = "ADD_TO_CART";
  export const TOGGLE_BACKGROUND = 'TOGGLE_BACKGROUND';

  // Định nghĩa kiểu cho các actions
  export type UserActionTypes =
    | { type: typeof SET_USER; payload: { account: UserState['account'] } }
    | { type: typeof LOGOUT_USER };
  
// types/Product.ts (hoặc ở đâu đó bạn khai báo)
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};


export type CategoryOption = string;

export interface SearchBarProps {
  categories: CategoryOption[];
  onSearch: (term: string, category: CategoryOption) => void;
}
