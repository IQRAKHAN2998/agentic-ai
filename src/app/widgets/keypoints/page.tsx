"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate once when it comes into view
  return (
    <div
      id="keypoints"
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-black text-white mt-16"
    >
       <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
    >
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Features
      </h2>
      
      
      {/* Features List */}
      <div className="max-w-3xl space-y-8">
        <FeatureItem title="Neural Networks">
          Neural networks are computational models designed to function like the
          human brain. They use multiple layers of artificial neurons to process
          data and recognize patterns.
        </FeatureItem>

        <FeatureItem title="Deep Learning">
          Deep learning is a subfield of AI that uses multi-layered neural
          networks to solve complex problems. It is widely used in image
          recognition, speech processing, and autonomous systems.
        </FeatureItem>

        <FeatureItem title="Advanced Machine Learning">
          Advanced ML is an evolution of traditional machine learning
          techniques, incorporating self-learning and adaptive algorithms to
          improve data insights and enable real-time decision-making.
        </FeatureItem>

        <FeatureItem title="Global Scale AI Solutions">
          AI is being optimized for large-scale applications, such as
          cloud-based AI services, big data analytics, and worldwide AI-powered
          automation, transforming various industries.
        </FeatureItem>
      </div>
      </motion.div>  
    </div>
    
  );
};

// Feature Item Component without Animation
const FeatureItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-gray-300">{children}</p>
    </div>
  );
};

export default FeaturesPage;
