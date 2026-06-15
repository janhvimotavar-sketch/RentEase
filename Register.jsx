function Register() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-10">

      <div className="bg-white shadow-md rounded-xl p-10 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Your Account
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          >
            <option>Select User Type</option>
            <option>Student</option>
            <option>Working Professional</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;