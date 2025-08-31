import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Slice/Slicecart";

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [showCard, setShowCard] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const checkoutCard = () => {
    if (cartItems.length > 0) {
      setShowCard(true); // show card when cart is not empty
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-50">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 bg-white rounded-lg shadow">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">Image</th>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Price (₹)</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Total (₹)</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border">
                    <td className="py-2 px-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain"
                      />
                    </td>
                    <td className="py-2 px-4 font-medium">{item.name}</td>
                    <td className="py-2 px-4">₹{item.price}</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Grand Total: ₹{total}</h2>
            <div className="flex gap-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Clear Cart
              </button>
              <button
                onClick={checkoutCard}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {/* ✅ Show card only when checkout is clicked */}
      {showCard && (
        <div className="checkout-card mt-8 bg-white border p-10 text-center rounded w-1/2 mx-auto shadow-sm">
          <h1 className="text-xl font-bold">Checkout Complete 🎉</h1>
          <button
            onClick={() => setShowCard(false)}
            className="mt-4 bg-[#6c63ff] text-white px-4 py-2 rounded font-bold hover:bg-[#5a52e6]"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
