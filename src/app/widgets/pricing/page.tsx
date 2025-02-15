"use client";
import { motion } from "framer-motion";

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "Startup",
      price: "$29/month",
      description: "Basic features for individuals",
      features: ["Access to core features", "5GB Cloud Storage", "Email Support"],
      colorFrom: "from-blue-400",
      colorTo: "to-green-400",
    },
    {
      title: "Professional",
      price: "$59/month",
      description: "Advanced features for teams",
      features: ["All Startup Features", "50GB Cloud Storage", "Priority Support"],
      colorFrom: "from-purple-400",
      colorTo: "to-pink-400",
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description: "Tailored solutions for businesses",
      features: ["All Professional Features", "Unlimited Storage", "Dedicated Account Manager"],
      colorFrom: "from-pink-400",
      colorTo: "to-red-400",
    },
  ];

  return (
    <div id="pricing" className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group overflow-hidden bg-gray-900 text-white shadow-lg rounded-lg p-6 text-center transition-all duration-500"
          >
            {/* Multi-Color Border Animation */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500"></div>

            {/* Inner Content */}
            <div className="relative z-10">
              <h3 className={`text-2xl font-semibold bg-gradient-to-r ${plan.colorFrom} ${plan.colorTo} bg-clip-text text-transparent`}>
                {plan.title}
              </h3>
              <p className="text-3xl font-bold my-3">{plan.price}</p>
              <p className="text-gray-300">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-500"
              >
                {plan.price === "Custom Pricing" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
