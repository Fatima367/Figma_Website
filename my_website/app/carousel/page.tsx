"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/img2.jpg",
  "/images/img17.jpg",
  "/images/img18.jpg",
  "/images/img4.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#067d68]">
      <div className="bg-white">
        <div
          className="mt-20 ml-10 relative lg:w-6/12 lg:h-80 overflow-hidden bg-[#067d68]
       ring-8 ring-[#feedcf] ring-offset-8 ring-offset-[#fff] w-96 h-80"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div
            onClick={prevSlide}
            className="absolute top-1/2 transform -translate-y-1/2 left-4 
        cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full text-white
         hover:bg-gray-900"
          >
            <ChevronLeft />
          </div>

          <div
            onClick={nextSlide}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 
        cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full text-white
         hover:bg-gray-900"
          >
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
