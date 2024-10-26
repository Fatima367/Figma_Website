"use client";
import Testimonials from "./about/page";
import Carousel from "./carousel/page";
import Contact from "./contact/page";
import Services from "./services/page";

export default function Home() {
  return (
    <section className="w-screen font-Arima scroll-smooth">
      <div className="">
        <h1
          className="text-4xl lg:text-6xl text-center lg:ml-[650px] mt-20 text-[#186758]
        lg:text-left"
        >
          Interior Design
        </h1>
        <p className="text-lg lg:text-xl text-center lg:ml-[650px] lg:text-left mt-6 mr-2">
          Step into the art and science of enhancing the interiors to achieve a
          healthier and more aesthetically pleasing environment
        </p>
      </div>

      <div className="mt-10 lg:-mt-72">
        <Carousel />
        <br />
        <br />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16">
        <p className="text-center lg:text-left text-3xl lg:text-4xl font-sans text-[#545454]">
          500+ <br />
          <span className="text-lg font-Arima text-[#545454]">
            {" "}
            Projects Completed
          </span>
        </p>
        <p className="text-center lg:text-left text-3xl lg:text-4xl font-sans text-[#545454] mt-6 lg:mt-0">
          500+ <br />
          <span className="text-lg font-Arima text-[#545454]">
            {" "}
            Satisfied Clients
          </span>
        </p>
        <p className="text-center lg:text-left text-3xl lg:text-4xl font-sans text-[#545454] mt-6 lg:mt-0">
          100+ <br />
          <span className="text-lg font-Arima text-[#545454]">
            {" "}
            Unique Designs
          </span>
        </p>
      </div>

      <br />
      <hr />
      <br />

      <Services />

      <hr />

      <Testimonials />

      <hr />
      <br />

      <Contact />
    </section>
  );
}
