export default function ContactForm() {
  return (
    <div
      id="contact"
      className="flex justify-center bg-center  items-center min-h-screen bg-cover bg-black bg-no-repeat relative"
      style={{ backgroundImage: "url('/imag.jpg')" }}>
    
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative w-full max-w-lg bg-gray-900 shadow-lg rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-300">First Name</label>
              <input type="text" name="firstName" className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:border-blue-500 focus:outline-none" required />
            </div>
            <div className="flex-1">
              <label className="block text-gray-300">Last Name</label>
              <input type="text" name="lastName" className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:border-blue-500 focus:outline-none" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-300">Email</label>
            <input type="email" name="email" className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:border-blue-500 focus:outline-none" required />
          </div>
          <div>
            <label className="block text-gray-300">Message</label>
            <textarea name="message" className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:border-blue-500 focus:outline-none h-28" required></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
