'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Details = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-12">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
    />
  
    <div className="w-full max-w-[1100px]">
      {/* 1st section */}
      <div className="flex gap-1 text-sm">
        <p className="opacity-50">Account  /  Gaming /</p>
        <span>  Havic HV G-92 Gamepad</span>
      </div>
  
      <div className="container mx-auto px-4 py-6">
        {/* Main Section */}
        <div className="sm:lg:flex flex-col  lg:flex-row gap-4">
          {/* Left Section: Product Images */}
          <div className="lg:sm:flex flex-col hidden lg:block space-y-2">
            {["/pictures/white1.png",
              "/pictures/white4.png",
              "/pictures/white2.png",
              "/pictures/white3.png"
            ].map((src, index) => (
              <div
                key={index}
                className="w-24 h-24 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-9/10 h-9/10 object-cover"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
  
          {/* Main Image */}
          <div className="flex-1">
           
           <Image
           src="/pictures/white4.png"
           alt="Main Product"
              className="w-full h-full object-contain rounded-md"
              style={{
                height: "calc(5 * 5rem + 8px)",
              }}
              width={500}
              height={500}
           />
          </div>
  
          {/* Right Section: Product Details */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm bg-[#DB4444] text-white px-2 py-1 rounded-md">
                In Stock
              </span>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 flex items-center space-x-1">
                  <i className="fas fa-chevron-left"></i>
                  <span>Prev</span>
                </button>
                <button className="text-gray-500 flex items-center space-x-1">
                  <span>Next</span>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Havic HV G-92 Gamepad</h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">5.0</span> | 22 reviews
              </p>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">$54.00</div>
            <div className="text-sm text-gray-500 mb-4">Dictum/Cursus/Risus</div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  className="px-3 py-2 text-gray-700"
                  onClick={() => {
                    const input = document.getElementById("quantityInput") as HTMLInputElement;
                    const currentValue = parseInt(input.value, 10) || 1;
                    if (currentValue > 1) input.value = (currentValue - 1).toString();
                  }}
                >
                  -
                </button>
                <input
                  id="quantityInput"
                  type="text"
                  className="w-12 text-center border-l border-r border-gray-300"
                  defaultValue="1"
                  readOnly
                />
                <button
                  className="px-3 py-2 text-gray-700"
                  onClick={() => {
                    const input = document.getElementById("quantityInput") as HTMLInputElement;
                    const currentValue = parseInt(input.value, 10) || 1;
                    input.value = (currentValue + 1).toString();
                  }}
                >
                  +
                </button>
              </div>
              
              <Link href="/cart"><button className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-[#8a2020]">
                Add to Cart
              </button></Link>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <button className="flex items-center space-x-1 text-gray-500">
                <i className="fas fa-heart"></i>
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500">
                <i className="fas fa-exchange-alt"></i>
                <span>Compare</span>
              </button>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Category: <span className="font-medium">Gaming</span>
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Tag: <span className="font-medium">Our Shop</span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-2">Share:</p>
              <div className="flex space-x-4">
                <button className="text-gray-500">
                  <i className="fab fa-facebook-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-twitter-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-instagram text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-linkedin text-xl"></i>
                </button>
              </div>
            </div>
          </div>
       </div></div>



       <div className='mt-10  flex items-center  justify-between '> 
         <div className='w-[156px] h-[40px] flex items-center justify-center gap-3'> <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
         <span className='font-[20px] text-[#DB4444]'>Related Item</span> </div>
          <button className='border-black bg-transparent border-[1px] rounded-[4px] w-[150px] gap-[10px] font-500 text-[16px] h-[56px]'>See All</button>
        </div>
        
         {/* product1 */}
         <div className='flex-wrap md:flex-nowrap items-center justify-center flex mt-5'>
        <div className="relative m-1 flex w-full sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">

  <div className="flex justify-center w-full  sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
    <p className="absolute top-2 left-2 shadow-md rounded-sm bg-[#DB4444] px-2 text-sm font-thin text-white">-35%</p>
    <i className="fa-regular fa-trash-can absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
   <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/gamepad.png"
   alt=''
   width={200}
   height={200}
   
   />
  </div>

  <Link href="/cart" className="flex items-center justify-center bg-black px-5 py-2.5 text-center text-sm font-medium text-white rounded-b-sm focus:outline-none focus:ring-4 focus:ring-gray-300 sm:px-4 sm:py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    Add to Cart
  </Link>

  <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-[70px]">
    <a href="#">
      <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">Gucci duffle bag</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$960</span>
      <span className="text-[16px] font-600 ml-2 text-gray-500 line-through">$1160</span>
    </div>
  </div>
</div>
  {/* product 2 */}
  <div className="relative m-1 flex w-full sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
    <i className="fa-regular fa-trash-can absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/speakers.png"
   alt=''
   width={200}
   height={200}
   
   />
  </div>
  <Link href="/cart" className="flex items-center justify-center bg-black px-5 py-2.5 text-center text-sm font-medium text-white rounded-b-sm focus:outline-none focus:ring-4 focus:ring-gray-300 sm:px-4 sm:py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    Add to Cart
  </Link>

  <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-[70px]">
    <a href="#">
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">RGB liquid CPU Cooler</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$1950</span>
     
    </div>
  </div>
  </div>
  {/* product 3 */}
  <div className="relative m-1 flex w-full  sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
   
    <i className="fa-regular fa-trash-can absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/controller.png"
   alt=''
   width={200}
   height={200}
   
   />
  </div>
  <Link href="/cart" className="flex items-center justify-center bg-black px-5 py-2.5 text-center text-sm font-medium text-white rounded-b-sm focus:outline-none focus:ring-4 focus:ring-gray-300 sm:px-4 sm:py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    Add to Cart
  </Link>

  <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-[70px]">
    <a href="#">
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">GP11 Shooter USB Gamepad</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$550</span>
   
    </div>
  </div>
  </div>
  {/* product 4 */}
  <div className="relative m-1 flex w-full  sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
   
    <i className="fa-regular fa-trash-can absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/jacket.png"
   alt=''
   width={200}
   height={200}
   
   />
  </div>

  <Link href="/cart" className="flex items-center justify-center bg-black px-5 py-2.5 text-center text-sm font-medium text-white rounded-b-sm focus:outline-none focus:ring-4 focus:ring-gray-300 sm:px-4 sm:py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    Add to Cart
  </Link>

  <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-[70px]">
    <a href="#">
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">Quilted Satin Jacket</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$750</span>
      
    </div>
  </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Details;
