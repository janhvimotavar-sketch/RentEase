import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
          RentEase
      </h1>

      <ul className="flex gap-6 font-medium">

        <li>
          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            🏠 Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-blue-600 transition"
          >
            ℹ️ About
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="hover:text-blue-600 transition"
          >
            📦 Products
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition"
          >
            📞 Contact
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="hover:text-blue-600 transition"
          >
            🛒 Cart ({cartItems.length})
          </Link>
        </li>

        <li>
          <Link
            to="/rental-history"
            className="hover:text-blue-600 transition"
          >
            📜 Rental History
          </Link>
        </li>

      </ul>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🔐 Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ✨ Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;