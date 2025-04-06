import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import emptyCart from '../assets/Empty.jpg'; 

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const final = total * 0.9;

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="bg-white p-8 h-[70vh] rounded-xl text-center flex flex-col items-center">
          <img src={emptyCart} alt="Empty Cart" className="w-64 h-64 mb-4" />
          <p className="text-lg text-gray-600 mb-4">Your cart is currently empty.</p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} className="h-16 w-16 object-contain" alt={item.title} />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            <p className="text-xl font-bold text-green-600">
              Final (after 10% discount): ${final.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
