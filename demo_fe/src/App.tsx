import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './component/cart';
import ProductDetail from './component/detail';
import HealthMartApp from './component/home/HomePage';
import ProductsPage from './component/product';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>

  );
}

export default App;