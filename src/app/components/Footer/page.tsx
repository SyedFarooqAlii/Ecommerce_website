import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-6">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />
      <footer className="mt-auto bg-[#000000] w-full dark:bg-neutral-950">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-2 lg:pt-20 mx-auto">
          <div className="px-4 sm:px-6 md:px-8 lg:px-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-2 lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80 w-[118px] h-[24px]"
                href="#"
                aria-label="Brand"
              >
                Exclusive
              </a>
              <div>
                <h4 className="font-500 text-[20px] mt-2 text-white">
                  Subscribe
                </h4>
                <p className="text-white font-400 text-[16px] w-[217px] mt-[12px]">
                  Get 10% off your first order
                </p>
                <div className="relative mt-3 w-full max-w-sm">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="bg-transparent border-white placeholder:pl-2 border-[1.5px] w-full h-12 pl-4 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <i className="fa-solid fa-paper-plane absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"></i>
                </div>
              </div>
            </div>

            <div className="lg:pl-16">
              <h4 className="font-semibold text-[20px] text-gray-100">Support</h4>
              <div className="mt-3 space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    111 Bijoy, Dhaka, Bangladesh.
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    exclusive@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    +8815-888-999
                  </a>
                </p>
              </div>
            </div>
            <div className="lg:pl-16">
              <h4 className="font-semibold text-[20px] text-gray-100">Account</h4>
              <div className="mt-3 space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    My Account
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Login / Register
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Cart
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Wish List
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Shop
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:pl-16">
              <h4 className="font-semibold text-[20px] text-gray-100">Quick link</h4>
              <div className="mt-3 space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Term Of Use
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    FAQ
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Contact
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:pl-16">
              <h4 className="w-[148px] h-[28px] font-poppins font-semibold text-[20px] text-gray-100">
                Download App
              </h4>
              <div className="mt-3 space-y-3">
                <div className="w-auto lg:w-[198px]  h-[84px]">
                  <p className="opacity-70 font-500 text-[12px] text-white leading-[18px]">
                    Save $3 with App New User Only
                  </p>
                  <div className="mt-2 w-auto flex gap-2">
                    <div className="shrink-0">
                      <Image
                      className="w-[56px] lg:w-[76px] h-[56px] lg:h-[76px] border-[2px] border-white"
                      src="/pictures/QR.jpeg"
                      alt="qr"
                      width={76}
                      height={76}
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="lg:h-[30px] h-[30px] w-[80px] lg:w-[104px] border-[0.6px] border-white rounded-md">
                        <img
                          src="https://th.bing.com/th/id/R.740290f9116c87003761b797ec0b8978?rik=T4%2f%2fp6dAe%2brA2g&riu=http%3a%2f%2fdata.ibtimes.sg%2fen%2ffull%2f12247%2fgoogle-play-store-8-1-73-apk.png&ehk=FTwPohieskMl4XmAWpapXS1bfZczszda5tYEZUU39JI%3d&risl=&pid=ImgRaw&r=0"
                          alt="Google Play"
                          className="w-full h-full object-cover rounded-[20px]"
                        />
                      </div>
                      <div className="lg:h-[30px] h-[30px] w-[80px] lg:w-[104px] border-[0.6px] border-white rounded-md">
                        <Image
                        className="w-full h-full object-cover rounded-[10px]"
                        src="/pictures/applestore.png"
                        alt="apple"
                        width={104}
                        height={30}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 lg:space-x-3 mt-4">
                    <a
                      className="text-white hover:bg-white/10 p-2 rounded-lg"
                      href="#"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      className="text-white hover:bg-white/10 p-2 rounded-lg"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="text-white hover:bg-white/10 p-2 rounded-lg"
                      href="#"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      className="text-white hover:bg-white/10 p-2 rounded-lg"
                      href="#"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-4 flex items-center justify-center opacity-40 border-white border-t-[1px]">
            <p className="mt-8 gap-1 flex items-center justify-center text-white opacity-40">
              <i className="fa-regular fa-copyright"></i> Copyright Rimel 2022. All
              right reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;