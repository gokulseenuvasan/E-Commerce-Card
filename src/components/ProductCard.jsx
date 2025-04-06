import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const inCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} className="h-40 object-contain mx-auto" alt={product.title} />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="text-sm">{product.description.substring(0, 100)}...</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button
        onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
