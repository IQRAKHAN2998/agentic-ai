"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FutureOfAI = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50% 0px -50% 0px" }); // Threshold alternative

  const items = [
    { title: "Human-Like Intelligence", text: "AI models will evolve to mimic human reasoning, creativity, and emotions, making interactions more natural and intuitive." },
    { title: "AI in Healthcare", text: "AI will revolutionize medical diagnosis, drug discovery, and personalized treatment, improving healthcare efficiency and patient outcomes." },
    { title: "Autonomous Systems", text: "Self-driving cars, robotics, and automated industries will rely heavily on AI, reducing human intervention and increasing safety." },
    { title: "AI Ethics & Regulation", text: "With growing AI power, ethical concerns and regulations will shape its development to ensure responsible and unbiased decision-making." },
    { title: "AI & Creativity", text: "AI will contribute to art, music, and content creation, pushing the boundaries of human creativity with AI-generated innovations." },
    { title: "Superintelligent AI", text: "The possibility of AI surpassing human intelligence (Artificial General Intelligence - AGI) is being explored, raising questions about control and coexistence." }
  ];

  return (
    <div id="future-ai" className="flex items-center justify-center min-h-screen bg-black text-white p-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Start from lower position
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="max-w-4xl mx-auto bg-black text-white p-6 rounded-lg shadow-xl"
        style={{ backgroundImage: "url('/imag.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          The Future of AI
        </h1>

        <p className="text-gray-300 text-lg mb-6 border border-gray-500 p-4 rounded-lg shadow-lg">
          The future of Artificial Intelligence (AI) is incredibly promising, with advancements that will reshape industries,
          businesses, and everyday life. AI is expected to become more autonomous, intelligent, and seamlessly integrated into our world.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left & Right alternation
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 + index * 0.2, ease: "easeOut" }}
              className="border border-gray-500 p-6 rounded-lg shadow-lg backdrop-blur-md bg-black/70"
            >
              <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FutureOfAI;
