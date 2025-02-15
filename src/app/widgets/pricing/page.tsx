"use client";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div id="pricing" className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Startup Plan (Right to Left) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Sirf ek dafa animate hoga, refresh pe repeat nahi hoga
          className="bg-gray-900 text-white shadow-lg border border-blue-500 rounded-lg p-6 text-center hover:shadow-blue-500/50 transition"
        >
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Startup
          </h3>
          <p className="text-3xl font-bold my-3">$29/month</p>
          <p className="text-gray-300">Basic features for individuals</p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li> Access to core features</li>
            <li> 5GB Cloud Storage</li>
            <li> Email Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </motion.div>

        {/* Professional Plan (Left to Right) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Sirf ek dafa animate hoga
          className="bg-gray-900 text-white shadow-lg border border-purple-500 rounded-lg p-6 text-center hover:shadow-purple-500/50 transition"
        >
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional
          </h3>
          <p className="text-3xl font-bold my-3">$59/month</p>
          <p className="text-gray-300">Advanced features for teams</p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li> All Startup Features</li>
            <li> 50GB Cloud Storage</li>
            <li> Priority Support</li>
          </ul>
          <button className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition">
            Get Started
          </button>
        </motion.div>

        {/* Enterprise Plan (Right to Left) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Sirf ek dafa animate hoga
          className="bg-gray-900 text-white shadow-lg border border-pink-500 rounded-lg p-6 text-center hover:shadow-pink-500/50 transition"
        >
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Enterprise
          </h3>
          <p className="text-3xl font-bold my-3">Custom Pricing</p>
          <p className="text-gray-300">Tailored solutions for businesses</p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li> All Professional Features</li>
            <li> Unlimited Storage</li>
            <li> Dedicated Account Manager</li>
          </ul>
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}
