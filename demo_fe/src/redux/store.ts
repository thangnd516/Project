// src/redux/store.ts
import { combineReducers, createStore } from 'redux';
import userReducer from './reducer/userReducer';
import counterReducer from './reducer/counterReducer';
import backgroundReducer from './reducer/BackgroundReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  background: backgroundReducer,
  cart: cartReducer, 
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
