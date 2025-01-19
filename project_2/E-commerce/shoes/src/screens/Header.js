import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";



function Header() {
  const totalItems = useSelector((state) => state.cart.cartItems.length);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-3xl font-extrabold cursor-pointer">
          <Link to="/">ShoeMart</Link>
        </div>

        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-white text-3xl cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
