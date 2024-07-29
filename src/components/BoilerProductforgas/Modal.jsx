import React, { useState, useEffect } from "react";

const Modal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "/src/assets/Bproduct1.png",
    "/src/assets/Bproduct2.png",
    "/src/assets/Bproduct3.jpg",
    "/src/assets/Bproduct4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full  overflow-hidden "
      data-carousel="slide"
    >
      <div
        className="relative flex h-76 md:h-96 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full"
          >
            <img
              src={slide}
              className="w-3/4 h-auto object-contain sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 sm:bottom-[20px] left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full sm:bottom-[20px] ${
              index === activeIndex ? "bg-black" : "bg-gray-400"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Modal;
