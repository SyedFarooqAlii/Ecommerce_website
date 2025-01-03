import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ForthPageProductdata=[
  {
  
    id: 1,
    slug: 'Product1',
    productimage: '/pictures/dogfood.jpeg',
    Productname: "Breed Dry Dog Food",
    ProductPrice: "$100",
    discount: "35%",
    originalPrice: "$260", 
  
},
  {
  
    id: 2,
    slug: 'Product2',
    productimage: '/pictures/camera.png',
    Productname: "CANON EOS DSLR Camera",
    ProductPrice: "$300",
    // discount: "35%",
    // originalPrice: "$260", 
  
},
  {
  
    id: 3,
    slug: 'Product3',
    productimage: '/pictures/laptop.png',
    Productname: "ASUS FHD Gaming Laptop",
    ProductPrice: "$700",
    // discount: "35%",
    // originalPrice: "$260", 
  
},
  {
  
    id: 3,
    slug: 'Product3',
    productimage: '/pictures/laptop.png',
    Productname: "ASUS FHD Gaming Laptop",
    ProductPrice: "$700",
    // discount: "35%",
    // originalPrice: "$260", 
  },
    {
  
      id: 4,
      slug: 'Product4',
      productimage: '/pictures/car.png',
      Productname: "Kids Electric Car",
      ProductPrice: "$920",
      discount: "25%",
      originalPrice: "$1060", 
    
  },
  
];
const FifthPageProductdata=[
  {
  
    id: 1,
    slug: 'Product1',
    productimage: '/pictures/chair.png',
    Productname: "S-Seriesp",
    ProductPrice: "$100",
    discount: "25%",
    originalPrice: "$160", 
  
},
  {
  
    id: 2,
    slug: 'Product2',
    productimage: '/pictures/shoes.png',
    Productname: "Jr. Zoom Soccer Cleats",
    ProductPrice: "$400",
    discount: "25%",
    originalPrice: "$560", 
  
},
  {
  
    id: 3,
    slug: 'Product3',
    productimage: '/pictures/controller.png',
    Productname: "GP11 Shooter USB Gamepad",
    ProductPrice: "$400",
    discount: "25%",
    originalPrice: "$560", 
  
},
  {
  
    id: 4,
    slug: 'Product4',
    productimage: '/pictures/jacket.png',
    Productname: "Quilted Satin Jacket",
    ProductPrice: "$320",
    discount: "25%",
    originalPrice: "$400", 
  
},
 
];
const Wishlist = () => {
  return (
    <div className='flex-wrap md:flex-nowrap items-center flex justify-center'>
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />
      <div className='flex-wrap md:flex-nowrap w-full sm:w-[1100px]  px-4 gap-4 md:gap-8 mt-8 '>
        <div className='flex-wrap w-full md:flex-nowrap  flex items-center justify-between '> 
          <p className='flex-wrap md:flex-nowrap font-[20px]'>Wishlist(4)</p>
         <Link href="/checkout"><button className='flex-wrap md:flex-nowrap border-black bg-transparent border-[1px] rounded-[4px] w-full sm:w-[223px] gap-[10px] font-500 text-[16px] h-auto sm:h-[56px]'>Move All To Bag</button></Link> 
        </div>
        {/* product1 */}
        <div className='flex-wrap md:flex-nowrap items-center justify-center flex mt-5'>
        <div className="relative m-1 flex w-full sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">

  <div className="flex justify-center w-full  sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
    <p className="absolute top-2 left-2 shadow-md rounded-sm bg-[#DB4444] px-2 text-sm font-thin text-white">-35%</p>
    <i className="fa-regular fa-trash-can lg:mr-2 absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
   <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/bag.png"
   alt='bag'
   width={178}
   height={129}
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
    <i className="fa-regular fa-trash-can lg:mr-2 absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/speakers.png"
   alt='bag'
   width={178}
   height={129}
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
   
    <i className="fa-regular fa-trash-can lg:mr-2 absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/controller.png"
   alt='bag'
   width={178}
   height={129}
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
   
    <i className="fa-regular fa-trash-can lg:mr-2 absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/jacket.png"
   alt='bag'
   width={178}
   height={129}
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
<div className='flex-wrap md:flex-nowrap mt-10  flex items-center justify-center md:justify-between '> 
         <div className='flex-wrap md:flex-nowrap w-[156px] h-[40px] flex items-center justify-center gap-3'> <div className='flex-wrap md:flex-nowrap w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
         <span className='flex-wrap md:flex-nowrap font-[20px]'>Just For You</span> </div>
          <Link href="/details"><button className='flex-wrap md:flex-nowrap border-black bg-transparent border-[1px] rounded-[4px] w-[150px] gap-[10px] font-500 text-[16px] h-auto sm:h-[56px]'>See All</button></Link>
        </div>
        {/* product5 */}
        <div className=' hidden lg:visible   md:flex-nowrap lg:flex mt-5 gap-0  sm:w-[1100px] w-full px-4 h-[466px]'>
        <div className="relative m-1  lg:sm:flex w-full  sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
    <p className="absolute top-2 left-2 shadow-md rounded-sm bg-[#DB4444] px-2 text-sm font-thin  text-white">-35%</p>
    <i className="fa-regular fa-eye absolute lg:mr-2 top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/laptop.png"
   alt='bag'
   width={178}
   height={129}
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
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">ASUS FHD Gaming Laptop</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$960</span>
      <span className="text-[16px] font-600 ml-2 text-gray-500 line-through">$1160</span>
    </div>
    <div className="flex space-x-1.5 ">
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className="text-base text-gray-800 !ml-2">50</p>
            </div>
  </div>
  </div>
     {/* product6 */}
     
     <div className="relative m-1 flex w-full  sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
  
    <i className="fa-regular fa-eye absolute lg:mr-2 top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/LCD.png"
   alt='bag'
   width={178}
   height={129}
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
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">IPS LCD Gaming Monitor</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$1160</span>
   
    </div>
    <div className="flex space-x-1.5 ">
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className="text-base text-gray-800 !ml-2">50</p>
            </div>
  </div></div>
    {/* product7*/}
     
    <div className="relative m-1 flex w-full  sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full lg:mr-2 sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
    <p className="absolute top-2 left-2 shadow-md rounded-sm bg-[#00FF66] px-2 text-sm font-thin  text-white">NEW</p>
    <i className="fa-regular fa-eye absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
    <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/gamepad.png"
   alt='bag'
   width={178}
   height={129}
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
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">HAVIT HV-G92 Gamepad</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$560</span>
      
    </div>
    <div className="flex space-x-1.5 ">
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className="text-base text-gray-800 !ml-2">50</p>
            </div>
  </div></div>
    {/* product8 */}
     
    <div className="relative m-1 flex w-full  sm:w-[270px] max-w-xs flex-col overflow-hidden h-auto sm:h-[322px] border border-gray-100 bg-white shadow-md">
  
  <div className="flex justify-center w-full sm:w-[270px] h-auto sm:h-[250px] bg-[#f5f5f5] relative">
   
  <i className="fa-regular fa-eye absolute lg:mr-2 top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
  <Image
   className="object-cover w-full sm:w-[200px] sm:h-[150px] mx-auto mt-7"
   src="/pictures/keyboard.png"
   alt='bag'
   width={178}
   height={129}
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
    <h5 className="text-[16px] sm:text-[14px] font-semibold tracking-tight text-gray-900">AK-900 Wired Keyboard</h5>
    </a>
    <div className="flex gap-2 items-center">
      <span className="text-[16px] font-500 text-[#DB4444]">$960</span>
    
    </div>
    <div className="flex space-x-1.5 ">
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className="text-base text-gray-800 !ml-2">50</p>
            </div>
  </div></div>
</div>

</div>
</div>

   
  )
}

export default Wishlist;
