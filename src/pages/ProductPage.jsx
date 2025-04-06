import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const inCart = cart.find((item) => item.id === product.id);
        return (
          <div key={product.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <h2 className="font-semibold h-16 mb-2 mt-2">{product.title}</h2>
            <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
            <div className="mt-2 mb-2 text-lg font-bold text-green-600">${product.price}</div>
            <button
              className={`mt-2 w-full px-4 py-2 rounded-lg ${inCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
            >
              {inCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        );
      })}
    </div>
  );
}