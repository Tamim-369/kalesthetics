"use client";

import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <>
      <header className="bg-background fixed w-full p-[0.7rem] lg:p-[0.3rem]">
        <div className="relative mx-auto max-w-full px-6 ">
          <nav
            aria-label="main navigation"
            className="flex  items-center justify-between font-medium text-white"
            role="navigation"
          >
            <div className="flex justify-center items-center">
              {/*      <!-- Brand logo --> */}
              <Link
                href={"/"}
                className="flex justify-center bg-[#162121] p-2 rounded-full items-center"
              >
                <Image
                  src={"/logo-2.png"}
                  alt="logo"
                  height={30}
                  width={30}
                  className=" "
                />
              </Link>

              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute bg-background lg:ml-8 flex lg:gap-8 justify-center items-center left-0 top-0 z-[-1] w-full  overflow-hidden  overflow-y-auto overscroll-contain bg-neutral px-8 pb-12 pt-24 font-medium  lg:visible lg:relative lg:top-0  lg:z-0 lg:flex h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 transition-[opacity,visibility] duration-150 ease-linear backdrop-blur-sm flex flex-col justify-center items-center text-center"
                    : "invisible  opacity-0"
                }`}
              >
                <li role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-white focus:text-white focus:outline-none focus-visible:outline-none "
                    href="javascript:void(0)"
                  >
                    <span>Features</span>
                  </a>
                </li>
                <li role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 text-white transition-colors duration-300 hover:text-white focus:text-white focus:outline-none focus-visible:outline-none "
                    href="javascript:void(0)"
                  >
                    <span>Pricing</span>
                  </a>
                </li>
                <li role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-white focus:text-white focus:outline-none focus-visible:outline-none "
                    href="javascript:void(0)"
                  >
                    <span>About</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="py-2 px-3 bg-gradient-to-bl from-emerald-600 via-[#2dc972] to-emerald-600 rounded-full font-roboto font-medium ">
                <span>Try it free</span>
              </button>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white   transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
