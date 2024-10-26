"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#093029] w-screen py-10 text-[#feedcf] font-Arima">
      <div className="container mx-auto px-4 ">
        <div className="my-4 lg:flex-row justify-between lg:space-x-2"></div>

        <div className="flex flex-col items-start justify-start text-center ">
          <div className="mb-4 lg:mb-0 lg:ml-0 ml-28">
            <p className="font-medium text-4xl">Ideal Interiors</p>
            <p className="text-sm font-sans">
              &copy; 2024 | All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div
        className="lg:ml-96 lg:-mt-20 flex lg:flex-row justify-between
       lg:space-x-2 mt-7 ml-20 -space-x-10 "
      >
        <div className="mb-8 lg:mb-0">
          <Link href={"/contact"}>
            <h3 className="font-bold text-xl mb-4 hover:border-b">Contact</h3>
          </Link>
          <ul>
            <li className="mb-2 hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2 hover:border-b">
              <Link href="/about">About</Link>
            </li>
            <li className="mb-2 hover:border-b">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="lg:-ml-28 mb-8 lg:mb-0 ml-20">
          <Link href={"/services"}>
            <h3 className="font-bold text-xl mb-4 hover:border-b">Services</h3>
          </Link>
          <ul>
            <li className="mb-2 hover:border-b ">
              <Link href="/services#intdes">Interior Design</Link>
            </li>
            <li className="mb-2 hover:border-b">
              <Link href="/services#outdes">Outdoor Design</Link>
            </li>
            <li className="mb-2 hover:border-b">
              <Link href="/services#lgtdes">Lighting Design</Link>
            </li>
          </ul>
        </div>

        <div className="mb-8 lg:mb-0 mt-44">
          <div className="flex"></div>
          <div className="flex space-x-4 lg:-mt-36 lg:-ml-11 lg:mr-16 -ml-96">
            <Link href="/">
              <FaFacebook className="text-2xl hover:text-blue-400 hover:scale-125" />
            </Link>
            <Link href="">
              <FaInstagram className="text-2xl hover:text-fuchsia-400 hover:scale-125" />
            </Link>
            <Link href="">
              <FaTwitter className="text-2xl hover:text-blue-400 hover:scale-125" />
            </Link>
            <Link href="">
              <FaLinkedin className="text-2xl hover:text-blue-400 hover:scale-125" />
            </Link>
          </div>
          <p className="lg:mt-6 lg:text-md lg:mb-4 lg:mr-14 lg:-ml-8 -ml-96 mt-3">
            idealinteriors@gmail.com
          </p>
          <p className="lg:text-md lg:mb-4 lg:mr-14 lg:-mt-2 lg:-ml-8 -ml-96 mt-3">
            +1 2328338197
          </p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
