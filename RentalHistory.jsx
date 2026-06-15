import { useState } from "react";
import toast from "react-hot-toast";

function RentalHistory() {

  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  // Delete Order
  const deleteOrder = (index) => {

    const updatedOrders = orders.filter((_, i) => i !== index);

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    toast.success("Order deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        📦 Rental History
      </h1>

      {orders.length === 0 ? (

        <p className="text-center text-gray-600 text-xl">
          No rental history found.
        </p>

      ) : (

        <div className="space-y-10">

          {orders.map((order, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >

              <h2 className="text-3xl font-bold text-blue-700 mb-6">
                Order #{index + 1}
              </h2>

              {/* Customer Details */}

              <div className="grid md:grid-cols-2 gap-4 mb-8 text-gray-700">

                <p><strong>👤 Name:</strong> {order.fullName}</p>

                <p><strong>📞 Phone:</strong> {order.phone}</p>

                <p><strong>📍 Address:</strong> {order.address}</p>

                <p><strong>⏳ Rental Tenure:</strong> {order.tenure}</p>

                <p><strong>📅 Delivery Date:</strong> {order.deliveryDate}</p>

              </div>

              <h3 className="text-2xl font-semibold mb-5">
                Rented Products
              </h3>

              <div className="space-y-5">

                {order.items.map((item, i) => (

                  <div
                    key={i}
                    className="border rounded-xl bg-gray-50 p-5 flex items-center gap-6"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 rounded-lg object-cover"
                    />

                    <div>

                      <h4 className="text-xl font-bold">
                        {item.name}
                      </h4>

                      <p className="text-blue-600 font-semibold mt-2">
                        {item.price}
                      </p>

                      <p className="text-gray-600">
                        Quantity: {item.quantity}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              <div className="mt-8">

                <button
                  onClick={() => deleteOrder(index)}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
                >
                  🗑 Delete Order
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default RentalHistory;