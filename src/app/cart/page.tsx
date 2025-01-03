"use client"
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const Cart = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  const handleIncrease1 = () => setQuantity1(quantity1 + 1);
  const handleDecrease1 = () => setQuantity1(Math.max(1, quantity1 - 1));

  const handleIncrease2 = () => setQuantity2(quantity2 + 1);
  const handleDecrease2 = () => setQuantity2(Math.max(1, quantity2 - 1));

  return (
    <div className="font-sans bg-white max-w-6xl mx-auto p-4">
      <div className="flex gap-1">
        <p className="opacity-50">Home / </p> <span> Cart</span>
      </div>

      <div className="overflow-x-auto">
        <table className="mt-12 w-full border-collapse divide-y">
          <thead className="whitespace-nowrap text-left">
            <tr>
              <th className="text-base text-[#000000] font-medium p-2">Product</th>
              <th className="text-base text-[#000000] font-medium p-2">Price</th>
              <th className="text-base text-[#000000] font-medium pl-6 p-2">Quantity</th>
              <th className="text-base text-[#000000] font-medium p-2">Subtotal</th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap divide-y">
            <tr>
              <td className="px-2 py-4">
                <div className="flex items-center gap-4 w-max">
                  <div className="h-32 shrink-0">
                  <Image
 className="w-full h-full object-contain rounded-lg"
   src="/pictures/LCD.png"
   alt='bag'
   width={178}
   height={129}
   />
                  </div>
                  <div>
                    <p className="text-base font-400 text-[#000000]">LCD Monitor</p>
                  </div>
                </div>
              </td>

              <td className="px-2 py-4">
                <h4 className="text-base font-400 text-[#000000]">$520</h4>
              </td>

              <td className="px-2 py-4">
                <div className="flex overflow-hidden border w-max rounded-lg">
                  <button
                    type="button"
                    className="bg-gray-100 flex items-center justify-center w-8 h-8 font-semibold"
                    onClick={handleDecrease1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                    </svg>
                  </button>
                  <span className="bg-transparent flex items-center justify-center w-8 h-8 font-semibold text-gray-800 text-sm">
                    {quantity1}
                  </span>
                  <button
                    type="button"
                    className="bg-gray-800 text-white flex items-center justify-center w-8 h-8 font-semibold"
                    onClick={handleIncrease1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                    </svg>
                  </button>
                </div>
              </td>

              <td className="px-2 py-4">
                <h4 className="text-base font-400 text-[#000000]">${(quantity1 * 18.5).toFixed(2)}</h4>
              </td>
            </tr>

            <tr>
              <td className="px-2 py-4">
                <div className="flex items-center gap-4 w-max">
                  <div className="h-32 shrink-0">
                  <Image
 className="w-full h-full object-contain rounded-lg"
   src="/pictures/gamepad.png"
   alt='bag'
   width={178}
   height={129}
   />
                  </div>
                  <div>
                    <p className="text-base font-400 text-[#000000]">H1 Gamepad</p>
                  </div>
                </div>
              </td>

              <td className="px-2 py-4">
                <h4 className="text-base font-400 text-[#000000]">$200</h4>
              </td>

              <td className="px-2 py-4">
                <div className="flex overflow-hidden border w-max rounded-lg">
                  <button
                    type="button"
                    className="bg-gray-100 flex items-center justify-center w-8 h-8 font-semibold"
                    onClick={handleDecrease2}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                    </svg>
                  </button>
                  <span className="bg-transparent flex items-center justify-center w-8 h-8 font-semibold text-gray-800 text-sm">
                    {quantity2}
                  </span>
                  <button
                    type="button"
                    className="bg-gray-800 text-white flex items-center justify-center w-8 h-8 font-semibold"
                    onClick={handleIncrease2}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                    </svg>
                  </button>
                </div>
              </td>

              <td className="px-2 py-4">
                <h4 className="text-base font-400 text-[#000000]">${(quantity2 * 18.5).toFixed(2)}</h4>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-3 cart-btn flex width-[100%] justify-between">
          <button className="border-[1px] py-2 px-8 font-500 text-[16px] rounded-[4px] border-black">
            Return To Shop
          </button>
          <button className="border-[1px] py-2 px-8 font-500 text-[16px] rounded-[4px] border-black">
            Update Cart
          </button>
        </div>

        <div className="mt-[45px]">
          <div className="mt-5 flex gap-[16px] flex-wrap sm:flex-nowrap">
            <div className="w-full sm:w-[300px] h-[56px] p-[16px_164px_16px_24px] rounded-[4px] border border-black opacity-100 relative ">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-[112px] h-6 top-4 left-6 opacity-50 absolute font-poppins font-400 font-[16px] leading-[24px]"
              />
            </div>
            <button className=" w-full sm:w-[211px] h-[56px] py-2 px-8 font-500 text-[14px] rounded-[4px] bg-[#DB4444] text-white ">
              Apply Coupon
            </button>
            <div className="max-w-xl ml-auto border-black border-[1.5px] w-full sm:w-[470px] h-[324px] rounded-[4px]">
              <h5 className="text-[20px] px-[24px] pt-[32px] font-500 font-poppins ">
                Cart Total
              </h5>
              <ul className="text-gray-800 divide-y px-[24px]">
                <li className="flex flex-wrap gap-3 text-base py-3">
                  Subtotal <span className="ml-auto font-bold">$37.00</span>
                </li>
                <li className="flex flex-wrap gap-3 text-base py-3">
                  Shipping <span className="ml-auto font-bold">$4.00</span>
                </li>
                <li className="flex flex-wrap gap-3 text-base py-3">
                  Tax <span className="ml-auto font-bold">$4.00</span>
                </li>
                <li className="flex flex-wrap gap-3 text-base py-3 font-bold">
                  Total <span className="ml-auto">$45.00</span>
                </li>
              </ul>

              <Link href="/checkout">
                <div className="mb-5 flex items-center justify-center ">
                  <button className=" w-[211px] h-[56px] py-2 px-8 font-500 text-[14px] rounded-[4px] bg-[#DB4444] text-white ">
                    Process To Checkout
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;