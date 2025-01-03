"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu Open/Close
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />
      <header className="shadow-md font-sans tracking-wide relative z-50">
        {/* Top Notification */}
        <section className="py-2 flex items-center justify-center bg-[#000000] text-[#fafafa] text-center px-10">
          <p className="text-sm">
            Summer Sale For All Swim Suits And Free Express delivery - OFF 50%!{" "}
            <a href="#" className="ml-2 border-b-[1.5px] text-[#fafafa]">
              {" "}
              <strong>Shop Now</strong>{" "}
            </a>
          </p>
          <p className="text-[14px] absolute lg:block hidden right-16">
            English <i className="text-[12px] fa-solid fa-angle-down"></i>
          </p>
        </section>

        {/* Main Navbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 bg-white min-h-[70px]">
          <Link href="javascript:void(0)">
            <h2 className="text-[1.5rem] mr-0  ml-4 lg:mr-36 lg:ml-[122px] font-bold text-[#333]">
             SF Exclusive
            </h2>
          </Link>

          {/* Desktop/Tablet Navbar (This will remain the same) */}
          <div className="lg:flex flex-grow gap-x-5 hidden">
            <ul className="flex gap-x-5">
              <li>
                <Link
                  href="/product"
                  className="text-[#000000] block font-400 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#000000] block font-400 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#000000] block font-400 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mr-32">
                <Link
                  href="/signup"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/">
                  <input
                    className="border-none outline-none text-[16px] px-2"
                    type="text"
                    placeholder="Search Your Product"
                  />
                  {/* <i className="text-[16px] opacity-50 fa-solid fa-question"></i> */}
                  <i className="fa-solid fa-magnifying-glass ml-8"></i>
                </Link>
              </li>
              <li>
                <Link href="/wishList">
                  <i className="text-black text-[22px] fa-regular fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="cart">
                  <i className="text-black text-[18px] fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <li>
             <Link href="/account"> <div className="flex items-center justify-center w-[22px] h-[22px] bg-[#DB4444] rounded-full">
  <i className="fa-solid fa-circle-user text-white text-4xl"></i>
</div></Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden ${
              isMenuOpen ? "block" : "hidden"
            } absolute top-0 left-0 w-full h-[340px] bg-white p-6 shadow-md overflow-y-auto`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <ul className="space-y-4">
            <li className="flex items-center mt-8">
                <input
                  className="border-none outline-none text-[16px] px-2 w-[85%]"
                  type="text"
                  placeholder="What are you looking for"
                />
                <i className="text-[16px] opacity-50 fa-solid fa-question"></i>
                <i className="fa-solid fa-magnifying-glass ml-8"></i>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="details"
                  className="text-[#000000] block font-500 text-[15px] hover:text-[#FF6347] transition duration-300"
                >
                  Dashboard
                </Link>
              </li>
          
              
            </ul>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="flex max-lg:ml-auto">
            <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
