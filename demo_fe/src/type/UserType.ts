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
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const TOGGLE_BACKGROUND = 'TOGGLE_BACKGROUND';

// Định nghĩa kiểu cho các actions
export type UserActionTypes =
  | { type: typeof SET_USER; payload: { account: UserState['account'] } }
  | { type: typeof LOGOUT_USER };

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  description?: string;
}


export interface CartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
export interface Author {
  id: number;
  username: string;
  role: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

export type ProductItemProps = {
  title: string;
  image: string;
  rating: number;
  originalPrice?: string;
  salePrice: string;
};
export type CategoryOption = string;

export interface SearchBarProps {
  categories: CategoryOption[];
  onSearch: (term: string, category: CategoryOption) => void;
}
export type Item = {
  id: number;
  name: string;
  url: string;
  icon?: string;
};

export type ItemsList = {
  id: number;
  title: string;
  items: Item[];
};
