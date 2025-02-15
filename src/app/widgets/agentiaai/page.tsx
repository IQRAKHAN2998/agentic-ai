import React from "react";

const Mainpage = () => {
  return (
    <div
      id="agentiaai"
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-black bg-cover bg-center bg-no-repeat text-white w-full h-screen"
      style={{ backgroundImage: "url('/imag.jpg')" }}>
        
      {/* Multi-Color Gradient Heading */}
      <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent "
      
      >
       Smart AI Agents for Enterprises
      </h1>

      {/* Responsive Paragraph */}
      <p className="text-lg md:text-xl max-w-2xl text-center leading-relaxed">
        Agentia AI is an advanced artificial intelligence platform that provides AI-driven solutions.
        It utilizes automation, deep learning, and neural networks to enhance intelligent decision-making
        and data processing. This platform optimizes AI models to offer scalable and efficient AI solutions
        for businesses and developers.
      </p>
      <div className="mt-8 flex flex-col md:flex-row gap-4 ">
        {/* Primary Button */}
        <button className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-500 
          hover:from-blue-500 hover:to-green-400 transition-all duration-300 rounded-lg shadow-lg">
          Deploy Your AI Agent &gt;
        </button>

        {/* Secondary Button */}
        <button className="px-8 py-3 text-lg font-semibold border-2 border-white bg-black 
          hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
          Watch Demo
        </button>
      </div>

    </div>
  );
};

export default Mainpage;
