import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Johnson',
    role: 'IT Manager',
    company: 'TechNova',
    quote: 'SoftSell helped us recover value from unused licenses effortlessly.',
  },
  {
    name: 'Maria Lopez',
    role: 'Procurement Lead',
    company: 'SysCore',
    quote: 'Fast payments and great support. Highly recommended!',
  },
  {
    name: 'Anand C.',
    role: 'CEO',
    company: 'MetroX',
    quote:
      'Lorem ipsum onsectetur adipiscing elit. Blandit mauris etiam faucibus laoreet vestibulum...',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative py-16 bg-black text-white text-center">
      <h2 className="text-4xl md:text-6xl lg:text-8xl opacity-80 font-bold mb-2">CUSTOMER</h2>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest">REVIEWS</h2>

   
      <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-center items-center gap-8 px-4">
      
        <button
          onClick={handlePrev}
          className="text-white hover:text-gray-300 transition mb-4 md:mb-0 absolute left-4 md:left-0"
        >
          <ChevronLeft size={36} />
        </button>


        <div className="max-w-xl md:max-w-3xl relative bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 p-10 rounded-2xl text-black">
          <p className="text- sm:text-2xl md:text-3xl lg:text-5xl italic mb-3">“{currentReview.quote}”</p>
          <div className="flex items-center justify-center gap-3">
            <img
              src={`https://i.pravatar.cc/40?u=${currentReview.name}`}
              alt={currentReview.name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-lg md:text-xl">{currentReview.name}</p>
              <p className="text-sm text-gray-400">
                {currentReview.role} of {currentReview.company}
              </p>
            </div>
          </div>
        </div>

  
        <button
          onClick={handleNext}
          className="text-white hover:text-gray-300 transition mb-4 md:mb-0 absolute right-4 md:right-0"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </section>
  );
}
