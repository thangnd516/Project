import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Dùng BrowserRouter thay vì Router
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from "./redux/store.ts";
import "nprogress/nprogress.css";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
