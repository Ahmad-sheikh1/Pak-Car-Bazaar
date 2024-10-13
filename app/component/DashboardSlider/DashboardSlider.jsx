"use client"
import { useState } from 'react';

const slides = [
  { id: 1, image: 'https://static.vecteezy.com/system/resources/previews/037/041/637/non_2x/ai-generated-racing-sport-on-road-free-photo.jpg', title: 'Slide 2' },
  { id: 2, image: 'https://static.vecteezy.com/system/resources/previews/003/492/290/non_2x/view-from-the-street-of-the-young-man-rubbing-his-aching-neck-while-looking-tired-from-driving-male-driver-having-neck-pain-sitting-in-his-car-free-photo.JPG', title: 'Slide 1' },
  { id: 3, image: 'https://static.vecteezy.com/system/resources/previews/007/133/171/non_2x/man-driving-a-car-free-photo.jpg', title: 'Slide 3' },
  { id: 4, image: 'https://static.vecteezy.com/system/resources/previews/010/091/821/non_2x/close-up-of-a-man-driving-car-dangerously-while-using-mobile-phone-free-photo.JPG', title: 'Slide 4' },
  { id: 5, image: 'https://picsum.photos/id/1027/800/400', title: 'Slide 5' },
];

const DashboardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full">
      <div className="relative lg:h-[70vh] h-[50vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top "
            />
          </div>
        ))}
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentSlide ? 'bg-gray-600' : 'bg-gray-200'
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardSlider;
