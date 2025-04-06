import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-300">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-300">+</button>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
      </div>
    </div>
  );
}
