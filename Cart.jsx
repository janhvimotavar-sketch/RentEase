import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {

  const { 
    cartItems, 
    removeFromCart,
    increaseQuantity,
    decreaseQuantity, 
  } = useContext(CartContext);

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => 
      {
          
        return (
          total + 
          Number(item.price.replace("₹", "").replace("/month", "")) *
          item.quantity
        );
      
      }, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">

      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (

        <p className="text-center text-gray-600 text-xl">
          Your cart is empty 😢
        </p>

      ) : (

        <>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {cartItems.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              <h2 className="text-2xl font-semibold mb-2">
                {item.name}
              </h2>

              <p className="text-gray-600 mb-4">
                {item.price}
              </p>
              <p className="text-gray-700 font-semibold mb-4">
                Quantity: {item.quantity}
              </p>

              <div className="flex gap-3 mb-4">

                <button
                  onClick={() => decreaseQuantity(item.name)}
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400"
                >
                  ➖
                </button>

                <button
                  onClick={() => increaseQuantity(item.name)}
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400"
                >
                  ➕
                </button>

              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className="text-center mt-12">
          
          <h2 className="text-3xl font-bold text-gray-800">
            Total Monthly Rent: ₹{totalPrice}
          </h2>

        </div>

        <div className="text-center mt-6">
          
          <button onClick={() => navigate("/checkout")}
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
          
        </div>
      </>

  )}

</div>

  );

}

export default Cart;