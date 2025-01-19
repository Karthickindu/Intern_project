import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItem, clearAllCartItems } from "../actions/cartActions";

function AddToCart() {
  // Select data from Redux store
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => ({
    cartItems: state.cart.cartItems,
    totalAmount: state.cart.totalAmount,
  }));

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleUpdateClick = (item, isAdd) => {
    const updatedQuantity = isAdd ? item.quantity + 1 : item.quantity - 1;
    dispatch(updateCartItem({ ...item, quantity: updatedQuantity }));
  };

  const handleClearAll = () => dispatch(clearAllCartItems())

  console.log("*******cartitems", cartItems, totalAmount); 

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-md shadow-md"
            >
              <div className="flex items-center space-x-4">
                <
                  img
                  src={item.image}alt={item.name}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h2 className="font-semibold text-gray-700 text-3xl">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-xl">Price: ₹{item.price}</p>
                  {/* <p className="text-gray-500 text-xl">
                    Quantity: <button onClick={() => handleUpdateClick(item, false)}>-</button>
                    {item.quantity}
                    <button onClick={() => handleUpdateClick(item, true)}>+</button>
                  </p> */}
                    <p className="text-gray-500 text-xl flex items-center gap-2 ">
                      Quantity:
                        <button
                        onClick={() => handleUpdateClick(item, false)}
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 bg-red-300 text-red-700 rounded hover:bg-red-400 disabled:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateClick(item, true)}
                        className="px-2 py-1 bg-green-300 text-gray-700 rounded hover:bg-green-400"
                      >
                        +
                      </button>
                    </p>

                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-bold text-gray-800">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
          <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleClearAll}>Clear All item</button>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800">
              Total Amount: ₹{totalAmount}
            </h2>

          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
