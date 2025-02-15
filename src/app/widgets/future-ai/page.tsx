"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FutureOfAI = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const items = [
    { title: "Human-Like Intelligence", text: "AI models will evolve to mimic human reasoning, creativity, and emotions, making interactions more natural and intuitive." },
    { title: "AI in Healthcare", text: "AI will revolutionize medical diagnosis, drug discovery, and personalized treatment, improving healthcare efficiency and patient outcomes." },
    { title: "Autonomous Systems", text: "Self-driving cars, robotics, and automated industries will rely heavily on AI, reducing human intervention and increasing safety." },
    { title: "AI Ethics & Regulation", text: "With growing AI power, ethical concerns and regulations will shape its development to ensure responsible and unbiased decision-making." },
    { title: "AI & Creativity", text: "AI will contribute to art, music, and content creation, pushing the boundaries of human creativity with AI-generated innovations." },
    { title: "Superintelligent AI", text: "The possibility of AI surpassing human intelligence (Artificial General Intelligence - AGI) is being explored, raising questions about control and coexistence." }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
    >
      <div
        id="future-ai"
        className="max-w-4xl mx-auto min-h-screen p-6 bg-black bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/imag.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          The Future of AI
        </h1>

        <p className="text-gray-300 text-lg mb-4 border border-gray-500 p-4 rounded-lg shadow-lg">
          The future of Artificial Intelligence (AI) is incredibly promising, with advancements that will reshape industries,
          businesses, and everyday life. AI is expected to become more autonomous, intelligent, and seamlessly integrated into our world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 4 < 2 ? -100 : 100 }} // Alternate left & right
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="border border-gray-500 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FutureOfAI;
