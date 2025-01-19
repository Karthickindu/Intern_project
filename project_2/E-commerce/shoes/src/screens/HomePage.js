import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { shoesList } from "../mocks/ShoesListMock";

function HomePage({ shoeInfo }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isItemInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (shoe) => {
    dispatch(addToCart(shoe));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Welcome to ShoeMart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoesList.map((shoeInfo) => (
          <div
            key={shoeInfo.id}
            className="bg-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-50 flex items-center justify-center">
              <img
                src={shoeInfo.image}
                alt={`shoe-${shoeInfo.id}`}
                className="h-full w-auto object-contain rounded-t-md"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {shoeInfo.name}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Price: ₹{shoeInfo.price}
              </p>
              {/* <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => handleAddToCart(shoeInfo)}
              >
                Add to Cart
              </button> */}

              <button
                className={`mt-4 px-4 py-2 rounded-md ${
                  isItemInCart(shoeInfo.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => handleAddToCart(shoeInfo)}
                disabled={isItemInCart(shoeInfo.id)} // Disable button if the item is in the cart
              >
                {isItemInCart(shoeInfo.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
