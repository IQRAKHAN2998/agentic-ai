"use client";
import { motion } from "framer-motion";

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "Startup",
      price: "$29/month",
      description: "Basic features for individuals",
      features: ["Access to core features", "5GB Cloud Storage", "Email Support"],
      color: "blue",
    },
    {
      title: "Professional",
      price: "$59/month",
      description: "Advanced features for teams",
      features: ["All Startup Features", "50GB Cloud Storage", "Priority Support"],
      color: "purple",
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description: "Tailored solutions for businesses",
      features: ["All Professional Features", "Unlimited Storage", "Dedicated Account Manager"],
      color: "pink",
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
            className={`bg-gray-900 text-white shadow-lg border border-${plan.color}-500 rounded-lg p-6 text-center hover:shadow-${plan.color}-500/50 transition`}
          >
            <h3 className={`text-2xl font-semibold bg-gradient-to-r from-${plan.color}-400 to-green-400 bg-clip-text text-transparent`}>
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
              className={`mt-6 w-full md:w-auto bg-${plan.color}-500 text-white px-4 py-3 md:px-6 md:py-3 rounded-lg hover:bg-${plan.color}-600 transition`}
            >
              {plan.price === "Custom Pricing" ? "Contact Us" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
