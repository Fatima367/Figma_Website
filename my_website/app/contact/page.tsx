"use client";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="font-Arima">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-14 mt-5 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl">Contact Us:</h1>

          <div className="flex items-center mt-6 space-x-3">
            <MailIcon />
            <p>idealinteriors@gmail.com</p>
          </div>

          <div className="flex items-center mt-6 space-x-3">
            <PhoneIcon />
            <p>+1 2328338197</p>
          </div>

          <div className="flex items-center mt-6 space-x-3">
            <MapPin />
            <p>123 Main Street, New York, NY 10001, USA</p>
          </div>

          <div className="flex items-center mt-6 space-x-3">
            <FaFacebookSquare className="h-7 w-7" />
            <p>Ideal Interiors</p>
          </div>

          <div className="flex items-center mt-6 space-x-3">
            <FaInstagramSquare className="h-7 w-7" />
            <p>idealinteriors.ltd</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/img14.jpg"
            alt="Room"
            className="rounded-lg shadow-lg object-cover"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
