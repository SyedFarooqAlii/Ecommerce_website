"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'



const Herosec = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row mx-4 lg:mx-16 items-center justify-center">
      {/* Sidebar and Menu */}
      <div className="flex w-full lg:w-auto  justify-start gap-8 lg:justify-center">
        {/* Hamburger Icon */}
        <div className="block lg:hidden ml-4 mt-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[24px] focus:outline-none"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:ml-14 h-auto ml-0 lg:h-[344px] w-auto lg:w-[217px]`}
        >
          <ul className="list-none text-[16px] gap-[16px] justify-start lg:justify-end">
            <Link href="/error">
            <li className="pt-4">
              Womans Fashion{' '}
              <i className="text-[14px] ml-8 rotate-[90deg] fa-solid fa-angle-up"></i>
            </li>
            <li className="pt-4">
              Mens Fashion{' '}
              <i className="text-[14px] ml-14 rotate-[90deg] fa-solid fa-angle-up"></i>
            </li>
            <li className="pt-4">Electronic</li>
            <li className="pt-4">Home & Lifestyle</li>
            <li className="pt-4">Medicine</li>
            <li className="pt-4">Sports & Outdoor</li>
            <li className="pt-4">Babys & Toys</li>
            <li className="pt-4">Groceries & Pets</li>
            <li className="pt-4">Health & Beauty</li></Link>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-[390px] w-[0.5px] opacity-30 bg-black mr-6"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-black w-full lg:w-[882px] overflow-hidden h-auto lg:h-[344px] mt-6 lg:mt-12 lg:ml-[15px]">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Text and Image Section */}
          <div className="text-center lg:text-left">
            <div className="mt-6 lg:mt-[38px] lg:ml-[64px] flex items-center justify-center lg:justify-start gap-[16px] w-full lg:w-[196px] h-[49px]">
              <Image 
              src="/pictures/apple.png"
              alt=""
              width={49}
              height={49}
              />
              <p className="text-[#fafafa] text-[16px] font-400 poppins">
                iPhone 14 Series
              </p>
            </div>

            <div className="lg:ml-[72px] mt-[22px] w-full lg:w-[294px] h-auto leading-[60px] font-inter">
              <h1 className="tracking-[1px] text-[36px] lg:text-[48px] font-[600] text-[#fafafa]">
                Up to 10%
              </h1>
              <h1 className="text-[36px] lg:text-[48px] tracking-[2px] font-[600] text-[#fafafa]">
                off Voucher
              </h1>
            </div>
            <div className="flex items-center  justify-center lg:justify-start mt-4 lg:ml-[75px] gap-[8px] w-full lg:w-[113px] h-[28px]">
              <p className="text-[#fafafa]  text-[16px] font-[500]">Shop Now</p>
              <i className="text-[#fafafa] font-[500] text-[16px] fa-solid fa-arrow-right"></i>
            </div>
          </div>

          {/* Image */}
          <Image
  className="mt-6 lg:mt-[8px] w-[90%] lg:w-[486px] h-auto lg:h-[312px]"
  src="/pictures/iphone.jpeg"
  alt=""
  width={486}
  height={312}
/>
        </div>

        {/* Pagination Dots */}
        <div className="cursor-pointer flex items-center justify-center gap-[12px] w-full h-[20px] mt-0 mb-2 lg:mb-0">
          <div className="h-[12px] w-[12px] opacity-50 rounded-[50%] bg-white"></div>
          <div className="h-[12px] w-[12px] opacity-50 rounded-[50%] bg-white"></div>
          <div className="h-[12px] w-[12px] rounded-[50%] bg-[#bd4444] border-white border-[2px]"></div>
          <div className="h-[12px] w-[12px] opacity-50 rounded-[50%] bg-white"></div>
          <div className="h-[12px] w-[12px] opacity-50 rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
