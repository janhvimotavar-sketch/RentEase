function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-10">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-4">
              We are here to help you with your furniture and appliance rental needs.
            </p>

            <p className="text-gray-700 mb-2">
              📧 support@rentease.com
            </p>

          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            ></textarea>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;