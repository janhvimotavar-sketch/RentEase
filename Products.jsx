import sofa from "../images/sofa.jpg";
import bed from "../images/bed.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import studytable from "../images/studytable.jpg";
import washingmachine from "../images/washingmachine.jpg";
import officechair from "../images/officechair.jpg";
import microwave from "../images/microwave.jpg";
import toaster from "../images/toaster.jpg";
import wardrobe from "../images/wardrobe.jpg";
import coffeetable from "../images/coffeetable.jpg";
import laptop from "../images/laptop.jpg";
import diningtable from "../images/diningtable.jpg";
import printer from "../images/printer.jpg";
import speaker from "../images/speaker.jpg";
import computer from "../images/computer.jpg";
import gameconsole from "../images/gameconsole.jpg";
import ac from "../images/ac.jpg";
import waterpurifier from "../images/waterpurifier.jpg";
import vacuumcleaner from "../images/vacuumcleaner.jpg";
import aircooler from "../images/aircooler.jpg";

import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { addToCart } = useContext(CartContext);

  const products = [

    // Furniture
    {
      name: "Luxury Sofa",
      price: "₹1200/month",
      deposit: "₹3000",
      image: sofa,
      category: "Furniture",
    },

    {
      name: "Bed",
      price: "₹1500/month",
      deposit: "₹4000",
      image: bed,
      category: "Furniture",
    },

    {
      name: "Study Table",
      price: "₹700/month",
      deposit: "₹1500",
      image: studytable,
      category: "Furniture",
    },

    {
      name: "Office Chair",
      price: "₹500/month",
      deposit: "₹1200",
      image: officechair,
      category: "Furniture",
    },

    {
      name: "Wardrobe",
      price: "₹1100/month",
      deposit: "₹3000",
      image: wardrobe,
      category: "Furniture",
    },

    {
      name: "Coffee Table",
      price: "₹600/month",
      deposit: "₹1500",
      image: coffeetable,
      category: "Furniture",
    },

    {
      name: "Dining Table",
      price: "₹1400/month",
      deposit: "₹3500",
      image: diningtable,
      category: "Furniture",
    },

    // Electronics
    {
      name: "Smart TV",
      price: "₹1000/month",
      deposit: "₹2500",
      image: tv,
      category: "Electronics",
    },

    {
      name: "Laptop",
      price: "₹2500/month",
      deposit: "₹7000",
      image: laptop,
      category: "Electronics",
    },

    {
      name: "Printer",
      price: "₹800/month",
      deposit: "₹2000",
      image: printer,
      category: "Electronics",
    },

    {
      name: "Speaker",
      price: "₹900/month",
      deposit: "₹2200",
      image: speaker,
      category: "Electronics",
    },

    {
      name: "Desktop PC",
      price: "₹3000/month",
      deposit: "₹8000",
      image: computer,
      category: "Electronics",
    },

    {
      name: "Gaming Console",
      price: "₹1800/month",
      deposit: "₹5000",
      image: gameconsole,
      category: "Electronics",
    },

    {
      name: "AC",
      price: "₹2200/month",
      deposit: "₹6000",
      image: ac,
      category: "Electronics",
    },

    // Appliances
    {
      name: "Refrigerator",
      price: "₹900/month",
      deposit: "₹2000",
      image: fridge,
      category: "Appliances",
    },

    {
      name: "Microwave",
      price: "₹800/month",
      deposit: "₹2000",
      image: microwave,
      category: "Appliances",
    },

    {
      name: "Toaster",
      price: "₹400/month",
      deposit: "₹1000",
      image: toaster,
      category: "Appliances",
    },

    {
      name: "Washing Machine",
      price: "₹1300/month",
      deposit: "₹3500",
      image: washingmachine,
      category: "Appliances",
    },

    {
      name: "Water Purifier",
      price: "₹1000/month",
      deposit: "₹2500",
      image: waterpurifier,
      category: "Appliances",
    },

    {
      name: "Vacuum Cleaner",
      price: "₹1100/month",
      deposit: "₹3000",
      image: vacuumcleaner,
      category: "Appliances",
    },

    {
      name: "Air Cooler",
      price: "₹1500/month",
      deposit: "₹4000",
      image: aircooler,
      category: "Appliances",
    },

  ];

  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;

  });

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">

      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Rental Products
      </h1>

      {/* Category Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mb-8">

        <button
          onClick={() => setCategory("All")}
          className={`px-5 py-2 rounded-lg text-white transition ${
            category === "All"
              ? "bg-blue-800"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setCategory("Furniture")}
          className={`px-5 py-2 rounded-lg text-white transition ${
            category === "Furniture"
              ? "bg-blue-800"
              : "bg-blue-600 hover:bg-blue-700"
          }`}   
        >
          Furniture
        </button>

        <button
          onClick={() => setCategory("Electronics")}
          className={`px-5 py-2 rounded-lg text-white transition ${
          category === "Electronics"
            ? "bg-blue-800"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        >
          Electronics
        </button>

        <button
          onClick={() => setCategory("Appliances")}
          className={`px-5 py-2 rounded-lg text-white transition ${
          category === "Appliances"
            ? "bg-blue-800"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        >
          Appliances
        </button>

      </div>

      {/* Search Bar */}

      <div className="flex justify-center mb-10">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center">
              
              <h2 className="text-2xl font-semibold text-gray-600">
                No products found 😢
              </h2>
            
            </div>
          
          ) : (
          
          filteredProducts.map((product, index) => (
          
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg mb-4 hover:scale-105 transition duration-300"
            />

            <h2 className="text-2xl font-semibold mb-3">
              {product.name}
            </h2>

            <p className="text-gray-600">
              {product.price}
            </p>

            <p className="text-gray-500 mb-4">
              Deposit: {product.deposit}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Rent Now
            </button>

          </div>

        ))

        )}

      </div>

    </div>
  );
}

export default Products;