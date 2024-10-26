"use client";

import Image from "next/image";

export default function Designs() {
  return (
    <section className="font-Arima">
      <div className="mb-12 items-start justify-start px-4 md:px-8">
        <h1 id="intdes" className="text-3xl mt-8">
          Interior Designs
        </h1>
        <div className="flex flex-wrap gap-10 justify-center mt-6">
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img4.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img9.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img5.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
        </div>

        <br />
        <br />
        <hr />

        <h1 id="outdes" className="text-3xl mt-8">
          Outdoor Designs
        </h1>
        <div className="flex flex-wrap gap-10 justify-center mt-6">
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img7.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img8.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img6.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
        </div>

        <br />
        <br />
        <hr />

        <h1 id="lgtdes" className="text-3xl mt-8">
          Lighting Designs
        </h1>
        <div className="flex flex-wrap gap-10 justify-center mt-6">
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img12.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img11.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
          <div className="ring-8 ring-[#feedcf] shadow-md hover:scale-105 duration-100">
            <Image
              src={"/images/img13.jpg"}
              height={250}
              width={250}
              alt="work"
              className="bg-gray-200 object-cover h-64 w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
