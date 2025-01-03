import Image from "next/image";
import React from "react";

const Checkout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-12">
      <div className="w-full max-w-[1100px]">
        <div className="flex flex-wrap gap-2 text-sm">
          <p className="opacity-50">Account</p>
          <p className="opacity-50">/</p>
          <p className="opacity-50">My Account</p>
          <p className="opacity-50">/</p>
          <p className="opacity-50">Poduct</p>
          <p className="opacity-50">/</p>
          <p className="opacity-50">View Cart</p>
          <p className="opacity-50">/</p>
          <span>Checkout</span>
        </div>

        <h1 className="text-4xl md:text-5xl mt-6 font-bold">Billing Details</h1>
        <div className="mt-6 flex flex-col md:flex-row justify-between w-full gap-6">
          <div className="w-full md:w-2/5">
            <p className="opacity-50">First Name</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <p className="opacity-50 mt-4">Company Name</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <p className="opacity-50 mt-4">Street Address</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <p className="opacity-50 mt-4">Apartment, floor, etc. (optional)</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <p className="opacity-50 mt-4">Town / City</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <p className="opacity-50 mt-4">Phone Number</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <p className="opacity-50 mt-4">Email Address</p>
            <input
              type="text"
              className="bg-[#F5F5F5] w-full h-10 rounded-sm"
            />
            <div className="flex justify-center mt-6 items-center">
              <input
                type="checkbox"
                className="form-checkbox w-6 h-6 text-[#DB4444] items-center border-[#DB4444]"
              />
              <span className="m-4">
                Save this information for faster check-out next time
              </span>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <div className="w-full md:w-4/5">
              <div className="flex justify-between mt-2">
                <div className="flex items-center">
                <Image
className="object-cover w-[40px] h-[40px]"
   src="/pictures/LCD.png"
   alt='bag'
   width={40}
   height={40}
   />
                  <p className="ml-6">LCD Monitor</p>
                </div>
                <div className="flex items-center">
                  <p>$650</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                <Image
className="object-cover w-[40px] h-[40px]"
   src="/pictures/gamepad.png"
   alt='bag'
   width={40}
   height={40}
   />
                  <p className="ml-6">Hi Gamepad</p>
                </div>
                <div className="flex items-center">
                  <p>$1100</p>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <div>
                  <p>SubTotal:</p>
                </div>
                <div>
                  <p>$1750</p>
                </div>
              </div>
              <div className="border-t-2 mt-2 border-black opacity-45 "></div>
              <div className="flex justify-between mt-6">
                <div>
                  <p>Shipping:</p>
                </div>
                <div>
                  <p>Free</p>
                </div>
              </div>
              <div className="border-t-2 mt-2 border-black opacity-45 "></div>

              <div className="flex justify-between mt-6">
                <div>
                  <p>Total:</p>
                </div>
                <div>
                  <p>$1750</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <div className="items-center flex">
                  <input type="radio" className="w-4 h-4" />
                  <span className="m-2">Bank</span>
                </div>
                <div className="flex justify-center gap-3 items-center">
                  <div>
                  <Image
  className="w-12 h-12 object-cover"
  src="/pictures/kash.png"
  alt="bag"
  width={50} 
  height={50} 
  layout="intrinsic"
/></div> <div> <Image
   className="w-10 h-10 object-contain"
      src="/pictures/visa.png"
      alt='bag'
      width={40} 
      height={40} 
      layout="intrinsic"
    
      /> </div>
                      <div> <Image
className="w-10 h-10 object-contain"
   src="/pictures/master.png"
   alt='bag'
   width={40} 
  height={40} 
  layout="intrinsic"
/> </div>
                      <div> <Image
className="w-8 h-8 object-contain"
   src="/pictures/easypaisa.png"
   alt='bag'
   width={30} 
  height={30} 
  layout="intrinsic"
/> </div> </div> </div>
                      
                      <div className="mt-4 flex justify-between">
                                  <div className="items-center flex">
                                    <input type="radio" className="w-4 h-4" />
                                    <span className="m-2">Paypal</span>
                                  </div>
                                </div>
                      
                                <div className="flex justify-between mt-4">
                                  <button className="w-full h-12 bg-[#DB4444] text-white">
                                    Place Order
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      ); };
                      
                      export default Checkout;