import { Navigate, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './component/cart';
import ProductDetail from './component/detail';
import HealthMartApp from './component/home/HomePage';
import ProductsPage from './component/product';
import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';
import BlogPage from './component/blog';
import BlogDetail from './component/blog/BlogDetail';
import { TopBar } from './component/home/TopBar';
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

      </Routes>
      <Footer />
    </>

  );
}

export default App;