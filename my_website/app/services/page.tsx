"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="font-Arima w-full">
      <div>
        <div className="text-center">
          <br />
          <h1 className="text-3xl">Our Services</h1>
        </div>
        <br />
        <div className="flex flex-col space-y-8 items-center justify-center">
          <div
            id="intdes"
            className="h-auto lg:w-[900px] bg-white border-4 border-[#feedcf] 
            hover:scale-105 hover:shadow-lg duration-150 w-96"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                src={"/images/img3.jpg"}
                height={250}
                width={250}
                alt="work"
                className="bg-gray-200 mt-4 ml-4 object-cover"
              />
              <div className="lg:ml-8 mt-4 lg:mt-0 p-4 lg:w-full">
                <h2 className="text-2xl font-semibold">Interior Design</h2>
                <p className="mt-4">
                  A service that includes everything you need to design an
                  amazing interior space.
                </p>
                <div className="mt-3 border-b border-b-gray-300 hover:bg-gray-100">
                  <Link href={"/designs#intdes"}>
                    <div className="flex justify-between py-4">
                      <p>Living Room Interior design</p>
                      <ArrowUpRight className="hover:bg-white" />
                    </div>
                  </Link>
                </div>
                <div className="mt-1 border-b border-b-gray-300 hover:bg-gray-100">
                  <Link href={"/designs#intdes"}>
                    <div className="flex justify-between py-4">
                      <p>Commercial Office Room Interior design</p>
                      <ArrowUpRight className="hover:bg-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="outdes"
            className="h-auto lg:w-[900px] bg-white border-4 border-[#feedcf] 
            hover:scale-105 hover:shadow-lg duration-150 w-96"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                src={"/images/img8.jpg"}
                height={250}
                width={250}
                alt="work"
                className="bg-gray-200 mt-4 ml-4 object-cover"
              />
              <div className="lg:ml-8 mt-4 lg:mt-0 p-4 lg:w-full">
                <h2 className="text-2xl font-semibold">Outdoor Design</h2>
                <p className="mt-4">
                  A service that includes everything you need to design a
                  relaxing outdoor space.
                </p>
                <div className="mt-3 border-b border-b-gray-300 hover:bg-gray-100">
                  <Link href={"/designs#outdes"}>
                    <div className="flex justify-between py-4">
                      <p>House Outdoor design</p>
                      <ArrowUpRight className="hover:bg-white" />
                    </div>
                  </Link>
                </div>
                <div className="mt-1 border-b border-b-gray-300 hover:bg-gray-100">
                  <Link href={"/designs#outdes"}>
                    <div className="flex justify-between py-4">
                      <p>Office Outdoor design</p>
                      <ArrowUpRight className="hover:bg-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="lgtdes"
            className="h-auto lg:w-[900px] bg-white border-4 border-[#feedcf] 
            hover:scale-105 hover:shadow-lg duration-150 w-96"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                src={"/images/img10.jpg"}
                height={250}
                width={250}
                alt="work"
                className="bg-gray-200 mt-4 ml-4 object-cover"
              />
              <div className="lg:ml-8 mt-4 lg:mt-0 p-4 lg:w-full">
                <h2 className="text-2xl font-semibold">Lighting Design</h2>
                <p className="mt-4">
                  A service that includes everything you need to design a
                  luxurious lighting environment.
                </p>
                <div className="mt-3 border-b border-b-gray-300 hover:bg-gray-100">
                  <Link href={"/designs#lgtdes"}>
                    <div className="flex justify-between py-4">
                      <p>Living Room Lighting design</p>
                      <ArrowUpRight className="hover:bg-white" />
                    </div>
                  </Link>
                </div>
                <div className="mt-1 border-b border-b-gray-300 hover:bg-gray-100">
                  <Link href={"/designs#lgtdes"}>
                    <div className="flex justify-between py-4">
                      <p>Office Lighting design</p>
                      <ArrowUpRight className="hover:bg-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}
