function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-10">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About RentEase
        </h1>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          RentEase is a modern furniture and appliance rental platform
          designed for students and working professionals who frequently
          relocate for education or jobs.
        </p>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          Our goal is to provide affordable and flexible rental solutions
          without the burden of purchasing expensive furniture and appliances.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          Why Choose Us?
        </h2>

        <ul className="list-disc pl-6 text-gray-600 text-lg space-y-3">

          <li>Affordable monthly rental plans</li>

          <li>Flexible rental tenure options</li>

          <li>Wide range of furniture & appliances</li>

          <li>Easy delivery and pickup support</li>

          <li>Simple and user-friendly platform</li>

        </ul>

      </div>

    </div>
  );
}

export default About;