import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Rent Furniture & Appliances <br />
          For Comfortable Living
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Affordable monthly rentals for students and working professionals.
          Choose from premium furniture and appliances with flexible rental plans.
        </p>

        <div className="mt-8 flex gap-4">
          
          <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Explore Products
          </Link>

          <Link
              to="/about"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Learn More
          </Link>

        </div>

      </section>

      <section className="py-16 px-8">

  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
    Explore Categories
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">Beds</h3>
    </div>

    <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">Sofas</h3>
    </div>

    <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">Tables</h3>
    </div>

    <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">TV</h3>
    </div>

    <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">Fridge</h3>
    </div>

    <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">Washing Machine</h3>
    </div>

  </div>

</section>

<section className="py-16 px-8">

  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
    Featured Rentals
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-3">Modern Sofa</h3>
      <p className="text-gray-600">₹1200/month</p>
      <p className="text-gray-500 mb-4">Deposit: ₹3000</p>

      <Link
          to="/cart"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Rent Now
      </Link>

    </div>

    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-3">Double Bed</h3>
      <p className="text-gray-600">₹1500/month</p>
      <p className="text-gray-500 mb-4">Deposit: ₹4000</p>

    <Link
        to="/cart"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Rent Now
    </Link>

    </div>

    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-3">Smart TV</h3>
      <p className="text-gray-600">₹1000/month</p>
      <p className="text-gray-500 mb-4">Deposit: ₹2500</p>

      <Link
          to="/cart"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Rent Now
      </Link>

    </div>

    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-3">Washing Machine</h3>
      <p className="text-gray-600">₹900/month</p>
      <p className="text-gray-500 mb-4">Deposit: ₹2000</p>

      <Link
          to="/cart"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Rent Now
      </Link>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;