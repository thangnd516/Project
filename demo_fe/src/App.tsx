import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './component/cart';
import ProductDetail from './component/detail';
import HealthMartApp from './component/home/HomePage';
import ProductsPage from './component/product';
import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';
function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </>

  );
}

export default App;