"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-screen pb-0 p-2 bg-[#093029] text-[#feedcf] font-Arima">
        <div className="justify-between px-2 md:flex border-b border-b-[#067d67]">
          <div>
            <div className="flex items-center justify-between py-1">
              <Link href={"/"}>
                <span className="text-2xl font-Arima font-bold">
                  Ideal Interiors
                </span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className=" absolute cursor-pointer top-[1rem] 
                  right-[1rem] w-[2rem] h-[1rem]"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <XMarkIcon className="text-xl " />
              ) : (
                <Bars3Icon className="text-xl " />
              )}
            </button>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto md:flex mx-auto items-end justify-end">
              <li className="pb-5 text-lg py-2 text-center md:px-4">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="pb-5 text-lg py-2 text-center md:px-4">
                <Link href={"/services"}>Services</Link>
              </li>
              <li className="pb-5 text-lg py-2 text-center md:px-4">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="pb-5 text-lg py-2 text-center md:px-4">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
