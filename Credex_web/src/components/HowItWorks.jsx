import React, { useEffect, useState } from 'react';
import GETPAID from '../assets/GET PAID.png';

const steps = [
  {
    title: 'Upload License',
    desc: 'Submit your software license details securely.',
    gradient: 'from-purple-200 via-pink-300 to-red-300'
  },
  {
    title: 'Get Valuation',
    desc: 'Receive an instant market value estimation.',
    gradient: 'from-blue-200 via-teal-400 to-lime-200'
  },
  {
    title: 'Get Paid',
    desc: 'Get money directly to your bank account.',
    gradient: 'from-yellow-200 via-orange-300 to-pink-300'
  },
];

function HowItWorks() {
  const [isInView, setIsInView] = useState(false);

  // Observer logic to detect when elements come into view
  const handleScroll = () => {
    const elements = document.querySelectorAll('.step');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        el.classList.add('opacity-100', 'transition-opacity', 'duration-1000');
        el.classList.remove('opacity-0');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-5xl sm:text-7xl md:text-8xl font-semibold mb-2">HOW IT</h2>
      <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-10 tracking-widest">WORKS</h2>
      <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-12 font-medium text-base sm:text-lg">
        Easily sell your unused software licenses in 3 simple steps — fast, secure, and hassle-free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {steps.slice(0, 2).map((step, index) => (
          <div
            key={index}
            className={`step relative bg-gradient-to-br ${step.gradient} rounded-xl overflow-hidden shadow-xl opacity-0`}
          >
            <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[400px]">
              <div className="text-3xl sm:text-4xl text-black/90 font-bold tracking-wide mb-6">
                STEP {index + 1}
              </div>
              <img src={GETPAID} alt={`Step ${index + 1}`} className="w-40 sm:w-60 h-auto object-contain mb-6" />
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-black/80">{step.title}</h3>
              <p className="text-black text-base sm:text-xl font-medium">{step.desc}</p>
            </div>
          </div>
        ))}

        {/* STEP 3 - Full Width on md+ */}
        <div
          className={`step md:col-span-2 relative bg-gradient-to-br ${steps[2].gradient} rounded-xl overflow-hidden shadow-xl opacity-0`}
        >
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px]">
            <div className="text-3xl sm:text-4xl text-black/90 font-bold tracking-wide mb-6">
              STEP 3
            </div>
            <img src={GETPAID} alt="Step 3" className="w-48 sm:w-72 h-auto object-contain mb-6" />
            <h3 className="text-2xl sm:text-4xl font-semibold mb-2 text-black/80">{steps[2].title}</h3>
            <p className="text-black font-medium text-base sm:text-2xl">{steps[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
