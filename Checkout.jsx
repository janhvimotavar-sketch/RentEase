import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [tenure, setTenure] = useState("3 Months");
  const [deliveryDate, setDeliveryDate] = useState("");

  const { cartItems, setCartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    // Check Empty Fields
    if (
      fullName.trim() === "" ||
      phone.trim() === "" ||
      address.trim() === "" ||
      deliveryDate === ""
    ) {
      toast.error("Please fill all the fields.");
      return;
    }

    // Name Validation
    if (!/^[A-Za-z ]+$/.test(fullName)) {
      toast.error("Name should contain only letters.");
      return;
    }

    // Phone Validation
    if (!/^[0-9]{10}$/.test(phone)) {
      toast.error("Phone number must contain exactly 10 digits.");
      return;
    }

    // Address Validation
    if (address.trim().length < 10) {
      toast.error("Address should be at least 10 characters.");
      return;
    }

    // Delivery Date Validation
    const today = new Date().toISOString().split("T")[0];

    if (deliveryDate < today) {
      toast.error("Please select today or a future delivery date.");
      return;
    }

    // Create Order
    const newOrder = {
      fullName,
      phone,
      address,
      tenure,
      deliveryDate,
      items: cartItems,
      orderDate: new Date().toLocaleDateString(),
    };

    // Save Orders
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    // Clear Cart
    setCartItems([]);

    // Success Message
    toast.success("Order placed successfully! 🎉");

    // Redirect to Rental History
    navigate("/rental-history");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>

            <label className="block text-lg font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Phone Number */}
          <div>

            <label className="block text-lg font-medium mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              maxLength={10}
              inputMode="numeric"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Address */}
          <div>

            <label className="block text-lg font-medium mb-2">
              Delivery Address
            </label>

            <textarea
              placeholder="Enter delivery address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

          </div>

          {/* Rental Tenure */}
          <div>

            <label className="block text-lg font-medium mb-2">
              Rental Tenure
            </label>

            <select
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>

          </div>

          {/* Delivery Date */}
          <div>

            <label className="block text-lg font-medium mb-2">
              Delivery Date
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Place Order
          </button>

        </form>

      </div>

    </div>
  );
}

export default Checkout;