import React, { useEffect, useState } from 'react';

const colors = [
  '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899',
  '#f59e0b', '#10b981', '#06b6d4', '#ef4444',
  '#a855f7', '#22d3ee',
];

function getRandomPosition() {
  return `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
}

function getRandomGradient() {
  const selected = [...colors]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8)
    .map(color => `radial-gradient(circle at ${getRandomPosition()}, ${color} 0%, transparent 80%)`);
  return selected.join(', ');
}

function Hero() {
  const [background, setBackground] = useState(getRandomGradient());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(getRandomGradient());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 py-12 text-white transition-all duration-1000 relative"
      style={{
        background: background,
        backgroundColor: '#1e293b',
      }}
    >

      <img
        src="./src/assets/logo.png" 
        alt="SoftSell Logo"
        className="md:fixed flex items-start md:top-[-30px] md:left-[-10px]  top-[-10px] left-[-10px] w-44 h-44 md:w-60 md:h-60 object-contain z-50"
      />

      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
        Sell Your Unused Software Licenses
      </h1>

      <p className="text-base md:text-xl mb-8 max-w-md md:max-w-xl">
        Turn your unused software into cash with SoftSell. Fast, secure, and easy resale process.
      </p>

      <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
        Get a Quote
      </button>
    </section>
  );
}

export default Hero;
