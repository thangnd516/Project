import { Route, Routes } from 'react-router-dom';
import './App.css';

import BlogPage from './component/blog';
import BlogDetail from './component/blog/BlogDetail';
import CartPage from './component/cart';
import ProductDetail from './component/detail';
import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';
import HealthMartApp from './component/home/HomePage';
import { TopBar } from './component/home/TopBar';
import ProductsPage from './component/product';
import RegisterPage from './component/Auth/RegisterPage';
import LoginPage from './component/Auth/Login';
function App() {

  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<HealthMartApp />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        {/* <Route path="/admin" element={<MainPage />}>
          <Route index element={<MainPage />} />
          <Route path="google" element={<>123</>} />
        </Route> */}
     
          <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />




      </Routes>
      <Footer />
    </>

  );
}

export default App;