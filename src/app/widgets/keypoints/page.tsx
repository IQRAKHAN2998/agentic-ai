"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FeaturesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" }); // Improved trigger

  return (
    <div
      id="keypoints"
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-black text-white mt-16"
    >
      {/* Main Heading with Smooth Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        Features
      </motion.h2>

      {/* Features List */}
      <div className="max-w-3xl space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Reduced x movement
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <FeatureItem title={feature.title}>{feature.description}</FeatureItem>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Feature List Data
const features = [
  {
    title: "Neural Networks",
    description:
      "Neural networks mimic the human brain to process data and recognize patterns using multiple layers of artificial neurons.",
  },
  {
    title: "Deep Learning",
    description:
      "Deep learning uses multi-layered neural networks for image recognition, speech processing, and autonomous systems.",
  },
  {
    title: "Advanced Machine Learning",
    description:
      "Advanced ML integrates self-learning algorithms to enhance real-time decision-making and data insights.",
  },
  {
    title: "Global Scale AI Solutions",
    description:
      "Cloud-based AI services and AI-powered automation are revolutionizing industries worldwide.",
  },
];

// Feature Item Component
const FeatureItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-gray-300">{children}</p>
    </div>
  );
};

export default FeaturesPage;
