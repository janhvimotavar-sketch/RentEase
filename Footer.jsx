function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            RentEase
          </h2>

          <p className="mt-4 text-gray-400">
            Affordable furniture & appliance rentals for modern urban living.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

         <p className="text-gray-400 mt-2">
            support@rentease.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 RentEase
      </div>

    </footer>
  );
}

export default Footer;