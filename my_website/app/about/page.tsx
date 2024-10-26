"use client";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
      name: "James Bennett",
      location: "Toronto, Canada",
      image: "/images/about.jpg",
    },
    {
      quote:
        "Amazing results! The website they built for us has boosted our business significantly. A highly skilled and professional team.",
      name: "Emma Johnson",
      location: "Sydney, Australia",
      image: "/images/about.jpg",
    },
    {
      quote:
        "Their approach to design is fresh and innovative. I've never worked with a team that understood my vision so perfectly!",
      name: "Michael Scott",
      location: "Los Angeles, USA",
      image: "/images/about.jpg",
    },
    {
      quote:
        "The best in the business! They transformed our concept into a stunning reality. I couldn’t be happier with the outcome.",
      name: "Olivia Brown",
      location: "London, UK",
      image: "/images/about.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-white py-16 px-8">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center
      h-auto"
      >
        <div className="col-span-1">
          <img
            src="/images/img1.jpg"
            alt="Room"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        <div className="col-span-2 h-auto">
          <h2 className="text-3xl font-semibold mb-8">
            What Our Customers Say About Us
          </h2>

          <div className="relative overflow-hidden lg:h-[250px] h-[380px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-1000 ${
                  index === currentIndex || index === currentIndex + 1
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <div className="flex space-x-8">
                  <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md mb-6">
                    <p className="italic mb-4">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-10 h-10 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md mb-6">
                    <p className="italic mb-4">
                      "{testimonials[currentIndex + 1]?.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonials[currentIndex + 1]?.image}
                        alt={testimonials[currentIndex + 1]?.name}
                        className="w-10 h-10 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">
                          {testimonials[currentIndex + 1]?.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonials[currentIndex + 1]?.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
