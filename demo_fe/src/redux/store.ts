// src/redux/store.ts
import { combineReducers, createStore } from 'redux';
import userReducer from './reducer/userReducer';
import counterReducer from './reducer/counterReducer';
import backgroundReducer from './reducer/BackgroundReducer';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  background: backgroundReducer
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
