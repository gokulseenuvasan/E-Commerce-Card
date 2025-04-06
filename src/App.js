import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <nav className="sticky top-0 bg-white shadow p-6 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">Candy Store</Link>
            <div className="space-x-4">

            <Link to="/" className="text-blue-600 px-4 py-2 rounded-lg border border-blue-600 ">Products</Link>
            <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Cart</Link>
            </div>

          </nav>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

