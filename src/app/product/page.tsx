import React from 'react'
import Herosec from '../components/Hero/page'
import Link from 'next/link'
import Image from 'next/image'





function Product() {
  
  const SecondPageProductdata = [
    {
      id: 1,
      slug: 'The-North-Coat',
      productimage: '/pictures/coat.png',
      Productname: "The North Coat",
      ProductPrice: "$260",
      discount: "35%",
      originalPrice: "$400",
    },
    {
      id: 2,
      slug: 'Gucci-Duffle-Bag',
      productimage: '/pictures/bag.png',
      Productname: "Gucci Duffle Bag",
      ProductPrice: "$820",
      discount: "25%",
      originalPrice: "$1100",
    },
    {
      id: 3,
      slug: 'RGB-Liquid-CPU-Cooler',
      productimage: '/pictures/speakers.png',
      Productname: "RGB Liquid CPU Cooler",
      ProductPrice: "$365",
      discount: "15%",
      originalPrice: "$430",
    },
  ];

  const FirstPageProductdata=[
    {
      id: 1,
      slug: 'HAVIT-HV-G92-Gamepad',
      productimage: '/pictures/gamepad.png',
      Productname: "HAVIT HV-G92 Gamepad",
      ProductPrice: "$960",
      discount: "35%",
      originalPrice: "$1100", 
    },
    {
      id: 2,
      slug: 'AK-900-Wired-Keyboard',
      productimage: '/pictures/keyboard.png',
      Productname: "AK-900 Wired Keyboard",
      ProductPrice: "$960",
      discount: "35%",
      originalPrice: "$1100", 
    },
    {
      id: 3,
      slug: 'IPS-LCD-Gaming-Monitor',
      productimage: '/pictures/LCD.png',
      Productname: "IPS LCD Gaming Monitor",
      ProductPrice: "$520",
      discount: "35%",
      originalPrice: "$1100", 
    },
    {
      id: 4,
      slug: 'S-Series-Comfort-Chair',
      productimage: '/pictures/chair.png',
      Productname: "S-Series Comfort Chair",
      ProductPrice: "$360",
      discount: "35%",
      originalPrice: "$360", 
    },
    
  ];
  const ThirdPageProductdata=[
    {
    
      id: 1,
      slug: 'AK-900-Wired-Keyboard',
      productimage: '/pictures/keyboard.png',
      Productname: "AK-900 Wired Keyboard",
      ProductPrice: "$100",
      discount: "35%",
      originalPrice: "$260", 
    
  },
    {
    
      id: 2,
      slug: 'IPS-LCD-Gaming-Monitor',
      productimage: '/pictures/LCD.png',
      Productname: "IPS LCD Gaming Monitor",
      ProductPrice: "$300",
      discount: "35%",
      originalPrice: "$260", 
    
  },
    {
    
      id: 3,
      slug: 'ASUS-FHD-Gaming-Laptop',
      productimage: '/pictures/laptop.png',
      Productname: "ASUS FHD Gaming Laptop",
      ProductPrice: "$700",
      discount: "35%",
      originalPrice: "$260", 
    
  },
    {
    
      id: 4,
      slug: 'Gucci-Duffle-Bag',
      productimage: '/pictures/bag.png',
      Productname: "Gucci Duffle Bag",
      ProductPrice: "$700",
      discount: "35%",
      originalPrice: "$260", 
    
  },
    {
    
      id: 5,
      slug: 'S-Series-Comfort-Chair',
      productimage: '/pictures/chair.png',
      Productname: "S-Series Comfort Chair",
      ProductPrice: "$100",
      discount: "25%",
      originalPrice: "$160", 
    
  },
    {
    
      id: 6,
      slug: 'Jr.-Zoom-Soccer-Cleats',
      productimage: '/pictures/shoes.png',
      Productname: "Jr. Zoom Soccer Cleats",
      ProductPrice: "$400",
      discount: "25%",
      originalPrice: "$560", 
    
  },
    {
    
      id: 7,
      slug: 'GP11-Shooter-USB-Gamepad',
      productimage: '/pictures/controller.png',
      Productname: "GP11 Shooter USB Gamepad",
      ProductPrice: "$400",
      discount: "25%",
      originalPrice: "$560", 
    
  },
    {
    
      id: 8,
      slug: 'Quilted-Satin-Jacket',
      productimage: '/pictures/jacket.png',
      Productname: "Quilted Satin Jacket",
      ProductPrice: "$320",
      discount: "25%",
      originalPrice: "$400", 
    
  },
  
    {
    
      id: 9,
      slug: 'The-North-Coat',
      productimage: '/pictures/coat.png',
      Productname: "The North Coat",
      ProductPrice: "$320",
      discount: "25%",
      originalPrice: "$400", 
    
  },

];
  
  return (
    <div>
      <Herosec/>
      {/* main div */}
        <div >
            {/* first div */}
            <div className='lg:mx-[118px] mx-0 mt-[106px]'>
                <div className='flex mx-[18px] lg:mx-0  items-center  gap-[16px] '><div className='w-[20px] h-[40px] bg-[#db4444] rounded-[4px]'></div> <p className='text-[16px] font-[600] text-[#db4444]'>Today's</p></div>

                <div className='flex flex-col lg:flex-row items-start  lg:items-center gap-[18px]  lg:gap-[74px]'><p className='text-[36px] font-[600] tracking-wider mx-[18px] lg:mx-0 mt-6'>Flash Sales</p>
                <div className='flex gap-[16px]  items-center justify-center w-[302px] h-[50px]'>
                    <div className='lg:w-[46px] w-auto h-auto lg:h-[50px]' ><p className='text-[12px] font-[500]'>Days</p> <h3 className='font-[700] text-[32px]'>03</h3>
                    
                    </div>
                    {/* colon div */}
                    <div className=' space-y-2 mt-8 w-[4px] h-[16px]'>
                        <div className='h-[4px] w-[4px] bg-[#E07575] rounded-[50%]'></div>
                        <div className='h-[4px] w-[4px] bg-[#E07575] rounded-[50%]'></div>
                    </div>

                    <div className='lg:w-[46px] w-auto h-auto lg:h-[50px]' ><p className='text-[12px] font-[500]'>Hours</p> <h3 className='font-[700] text-[32px]'>23</h3></div>
                    {/* colon div */}
                    <div className='space-y-2 w-[4px] mt-8 h-[16px]'>
                        <div className='h-[4px] w-[4px] bg-[#E07575] rounded-[50%]'></div>
                        <div className='h-[4px] w-[4px] bg-[#E07575] rounded-[50%]'></div>
                    </div>

                    <div className='lg:w-[46px] w-auto h-auto lg:h-[50px]'><p className='text-[12px] font-[500]'>Minutes</p> <h3 className='font-[700] text-[32px]'>19</h3></div>
                    {/* colon div */}
                    <div className='space-y-2 w-[4px] mt-8 h-[16px]'>
                        <div className='h-[4px] w-[4px] bg-[#E07575] rounded-[50%]'></div>
                        <div className='h-[4px] w-[4px] bg-[#E07575] rounded-[50%]'></div>
                    </div>
                    <div className='lg:w-[46px] w-auto h-auto lg:h-[50px]'><p className='text-[12px] font-[500]'>Seconds</p> <h3 className='font-[700] text-[32px]'>56</h3></div>
                </div>
                </div>
            </div>
            {/* second div */}
            <div></div>
        </div>

{/* product section */}

<div className="ml-[18px] lg:ml-[108px] overflow-hidden">

  <div className="flex flex-wrap justify-center gap-[16px] mt-5 lg:w-[1250px] lg:h-[350px]">
  
        {FirstPageProductdata.map((data) => (
          <div key={data.id} className="relative m-1 flex w-full sm:w-[48%] md:w-[31%] lg:w-[270px] max-w-xs flex-col overflow-hidden h-auto lg:h-[350px] border border-gray-100 bg-white shadow-md">
            {/* Product Image */}
            <Link href={`/product/${data.slug}`}>
            <div className="flex justify-center w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] bg-[#f5f5f5] relative">
              <p className="absolute top-2 left-2 shadow-md rounded-sm bg-[#DB4444] px-2 text-sm font-thin text-white">
                -{data.discount}
              </p>
              <i className="fa-regular fa-eye absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
              <Image
                className="object-contain lg:object-contain w-full h-[149px] mx-auto mt-16"
                src={data.productimage}
                alt={data.Productname}
                width={178}
                height={129}
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-auto lg:h-[70px]">
              <h5 className="text-[14px] sm:text-[16px] font-semibold tracking-tight text-gray-900">
                {data.Productname}
              </h5>
              <div className="flex gap-2 items-center">
                <span className="text-[14px] sm:text-[16px] font-500 text-[#DB4444]">
                  {data.ProductPrice}
                </span>
                <span className="text-[14px] sm:text-[16px] font-600 ml-2 text-gray-500 line-through">
                  {data.originalPrice}
                </span>
              </div>
              <div className="flex space-x-1.5">
                {/* Star Ratings */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 ${
                      i < 4 ? 'fill-[#facc15]' : 'fill-[#CED5D8]'
                    }`}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <p className="text-sm sm:text-base text-gray-800 !ml-2">50</p>
              </div>
              
            </div>
            </Link>
          </div>
          
        ))}



     
</div>
<Link href="/details"><div className='flex items-center justify-center mt-16'><button className='tracking-[1px] w-[234px] h-[56px] rounded-[4px] bg-[#db4444] text-[16px] font-[500] text-[#fafafa]'>View All Products </button></div></Link>

</div>


{/* second -page */}
<div className='lg:mx-[118px] mx-[18px] mt-[106px]'>
                <div className='flex  items-center  gap-[16px] '><div className='w-[20px] h-[40px] bg-[#db4444] rounded-[4px]'></div> <p className='text-[16px] font-[600] text-[#db4444]'>Today's</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start  lg:items-center gap-[18px] lg:gap-[74px]'><p className='text-[36px] font-[600] tracking-wider mt-6'>Flash Sales</p>
                <div className='gap-[40px] flex items-center justify-center'><i className="fa-solid fa-arrow-left"></i> <i className="fa-solid fa-arrow-right"></i></div>
                

</div><div className="flex flex-wrap mt-14 items-center justify-center gap-[15px] sm:gap-[20px] md:gap-[30px]">
  <div className="w-[140px] sm:w-[150px] md:w-[170px] flex items-center justify-center border-[1px] h-[120px] sm:h-[130px] md:h-[145px] rounded-[4px] border-gray-400">
    <div className="flex flex-col text-[36px] sm:text-[40px] md:text-[46.67px] items-center justify-center h-[56px] w-[56px]">
      <i className="fa-solid fa-mobile-screen-button"></i>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 font-[400]">Phones</p>
    </div>
  </div>
  <div className="w-[140px] sm:w-[150px] md:w-[170px] flex items-center justify-center border-[1px] h-[120px] sm:h-[130px] md:h-[145px] rounded-[4px] border-gray-400">
    <div className="flex flex-col text-[36px] sm:text-[40px] md:text-[46.67px] items-center justify-center h-[56px] w-[56px]">
      <i className="fa-solid fa-tv"></i>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 font-[400]">Computers</p>
    </div>
  </div>
  <div className="w-[140px] sm:w-[150px] md:w-[170px] flex items-center justify-center border-[1px] h-[120px] sm:h-[130px] md:h-[145px] rounded-[4px] border-gray-400">
    <div className="flex flex-col items-center justify-center h-[56px] w-[56px]">
    <Image
 className="object-contain lg:object-cover w-[178px] h-[129px] mx-auto mt-7"
 src="/pictures/smartwatch.svg"
 alt=''
 width={178}
 height={129}
 />
      <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 font-[400]">SmartWatch</p>
    </div>
  </div>
  <div className="w-[140px] sm:w-[150px] md:w-[170px] bg-[#db4444] h-[120px] sm:h-[130px] md:h-[145px] flex items-center justify-center border-[1px] rounded-[4px] border-gray-400">
    <div className="h-[56px] text-white flex flex-col items-center text-[36px] sm:text-[40px] md:text-[46.67px] justify-center w-[56px]">
      <i className="fa-solid fa-camera"></i>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 font-[400]">Camera</p>
    </div>
  </div>
  <div className="w-[140px] sm:w-[150px] md:w-[170px] flex items-center justify-center border-[1px] h-[120px] sm:h-[130px] md:h-[145px] rounded-[4px] border-gray-400">
    <div className="h-[56px] flex flex-col text-[36px] sm:text-[40px] md:text-[46.67px] items-center justify-center w-[56px]">
      <i className="fa-solid fa-headphones"></i>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 font-[400]">Headphones</p>
    </div>
  </div>
  <div className="w-[140px] lg:hidden sm:block sm:w-[150px] md:w-[170px] flex items-center justify-center border-[1px] h-[120px] sm:h-[130px] md:h-[145px] rounded-[4px] border-gray-400">
    <div className="flex flex-col opacity-100 text-[36px] sm:text-[40px] md:text-[46.67px] h-[56px] items-center justify-center w-[56px]">
      <i className="text-black fa-solid fa-gamepad"></i>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 font-[400]">Gaming</p>
    </div>
 
  </div>

</div>
          
  {/* Flash Sales Header */}
  <div className="lg:mx-[8px] mx-[0px] mt-[106px]">
        <div className="flex items-center gap-[16px]">
          <div className="w-[20px] h-[40px] bg-[#db4444] rounded-[4px]"></div>
          <p className="text-[16px] font-[600] text-[#db4444]">Today's</p>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[18px] lg:gap-[74px]">
          <p className="text-[36px] font-[600] tracking-wider mt-6">Flash Sales</p>
          <div className="lg:gap-[40px] gap-[20px] flex items-center justify-start lg:justify-center">
            <Link href="/wishList">
              <button className="tracking-[1px] w-[159px] h-[56px] rounded-[4px] bg-[#db4444] text-[16px] font-[500] text-[#fafafa]">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-wrap justify-center gap-[16px] mt-5">
        {SecondPageProductdata.map((data) => (
        
        <div key={data.id} className="relative m-1 flex w-full sm:w-[48%] md:w-[31%] lg:w-[270px] max-w-xs flex-col overflow-hidden h-auto lg:h-[350px] border border-gray-100 bg-white shadow-md">
            <Link href={`/product/${data.slug}`}>
            {/* Product Image */}
            <div className="flex justify-center w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] bg-[#f5f5f5] relative">
              <p className="absolute top-2 left-2 shadow-md rounded-sm bg-[#DB4444] px-2 text-sm font-thin text-white">
                -{data.discount}
              </p>
              <i className="fa-regular fa-eye absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
              <Image
                className="object-contain lg:object-cover w-[178px] h-[129px] mx-auto mt-16"
                src={data.productimage}
                alt={data.Productname}
                width={178}
                height={129}
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-auto lg:h-[70px]">
              <h5 className="text-[14px] sm:text-[16px] font-semibold tracking-tight text-gray-900">
                {data.Productname}
              </h5>
              <div className="flex gap-2 items-center">
                <span className="text-[14px] sm:text-[16px] font-500 text-[#DB4444]">
                  {data.ProductPrice}
                </span>
                <span className="text-[14px] sm:text-[16px] font-600 ml-2 text-gray-500 line-through">
                  {data.originalPrice}
                </span>
              </div>
              <div className="flex space-x-1.5">
                {/* Star Ratings */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 ${
                      i < 4 ? 'fill-[#facc15]' : 'fill-[#CED5D8]'
                    }`}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <p className="text-sm sm:text-base text-gray-800 !ml-2">50</p>
              </div>
          
            </div>
          </Link>
          </div>
        ))}
      </div>



<div className="h-auto lg:h-[500px] mt-24 flex flex-col lg:flex-row items-center rounded-[4px] justify-center bg-black">
  <div className="lg:ml-[75px] pt-[18px] lg:pt-[8px] text-center lg:text-left">
    <div>
      <p className="text-[16px] font-[600] text-[#00ff66]">Categories</p>
    </div>
    <div className="leading-[40px] lg:leading-[60px] w-full lg:w-[443px] h-auto mt-[20px] lg:mt-[35px]">
      <h1 className="text-[30px] lg:text-[45px] tracking-wider font-[600] text-[#fafafa]">Enhance Your</h1>
      <h1 className="text-[30px] lg:text-[45px] tracking-wider font-[600] text-[#fafafa]">Music Experience</h1>
    </div>
    <div className="h-auto mt-[20px] lg:mt-[35px] text-black gap-[12px] lg:gap-[24px] items-center justify-center flex w-full lg:w-[320px]">
      <div className="items-center justify-center flex flex-col-reverse w-[50px] lg:w-[62px] h-[50px] lg:h-[62px] rounded-full bg-white">
        <div className="h-[34px] flex items-center justify-center flex-col-reverse w-[48px]">
          <p className="text-[10px] lg:text-[11px] font-[400]">Hours</p>
          <h3 className="font-[600] text-[14px] lg:text-[16px]">23</h3>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col-reverse w-[50px] lg:w-[62px] h-[50px] lg:h-[62px] rounded-full bg-white">
        <div className="h-[34px] flex items-center justify-center flex-col-reverse w-[48px]">
          <p className="text-[10px] lg:text-[11px] font-[400]">Days</p>
          <h3 className="font-[600] text-[14px] lg:text-[16px]">05</h3>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col-reverse w-[50px] lg:w-[62px] h-[50px] lg:h-[62px] rounded-full bg-white">
        <div className="h-[34px] flex items-center justify-center flex-col-reverse w-[48px]">
          <p className="text-[10px] lg:text-[11px] font-[400]">Minutes</p>
          <h3 className="font-[600] text-[14px] lg:text-[16px]">59</h3>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col-reverse w-[50px] lg:w-[62px] h-[50px] lg:h-[62px] rounded-full bg-white">
        <div className="h-[34px] flex items-center justify-center flex-col-reverse w-[48px]">
          <p className="text-[10px] lg:text-[11px] font-[400]">Seconds</p>
          <h3 className="font-[600] text-[14px] lg:text-[16px]">35</h3>
        </div>
      </div>
    </div>
    <div className="mt-[20px] lg:mt-[35px]">
      <Link href="/checkout"><button className="text-white w-[140px] lg:w-[171px] bg-[#00ff66] text-[14px] lg:text-[16px] font-[500] h-[48px] lg:h-[56px] rounded-[4px] px-[16px] lg:px-[48px] py-[8px] lg:py-[16px]">
        Buy Now!
      </button></Link>
    </div>
  </div>
  <div className="w-full lg:w-[600px] relative flex items-center justify-center h-auto lg:h-[420px] mt-[0px] lg:mt-0">
    {/* Blurred background */}
    <div className="w-[300px] lg:w-[450px] absolute blur-[100px] lg:blur-[200px] flex items-center justify-center h-[300px] lg:h-[450px] rounded-full opacity-30 bg-[#d9d9d9]"></div>
    {/* Image on top of the blur */}
    <div className="relative z-10 w-[320px] lg:w-[550px]">
  <Image
    className="w-auto lg:w-full"
    src="/pictures/JBL.png"
    alt="Image Description"
    width={700} 
    height={500} 
    layout="responsive"
  />
</div>
  </div>
</div>


<div className='lg:mx-[0px] mx-[0px] mt-[106px]'>
                <div className='flex  items-center  gap-[16px] '><div className='w-[20px] h-[40px] bg-[#db4444] rounded-[4px]'></div> <p className='text-[16px] font-[600] text-[#db4444]'>Today's</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start  lg:items-center gap-[18px] lg:gap-[74px]'><p className='text-[36px] font-[600] tracking-wider mt-6'>Flash Sales</p>
                <div className='gap-[40px] flex items-center justify-center'><i className="fa-solid fa-arrow-left"></i> <i className="fa-solid fa-arrow-right"></i></div>
                

</div>
</div>
{/* product section */}
<div className='overflow-hidden'>
  <div className='flex flex-wrap lg:flex-nowrap mt-5 gap-[16px] w-full lg:w-[1250px] h-auto'>
    

    <div className="flex flex-wrap justify-center gap-[16px] mt-5">
        {ThirdPageProductdata.map((data) => (
          <div key={data.id} className="relative m-1 flex w-full sm:w-[48%] md:w-[31%] lg:w-[300px] max-w-xs flex-col overflow-hidden h-auto lg:h-[350px] border border-gray-100 bg-white shadow-md">
            <Link href={`/product/${data.slug}`}>
            {/* Product Image */}
            <div className="flex justify-center w-full h-[200px]  sm:h-[220px] md:h-[240px] lg:h-[250px] bg-[#f5f5f5] relative">
              <p className="absolute top-2 left-2 shadow-md  bg-[#DB4444] px-2 text-sm font-thin text-white">
                -{data.discount}
              </p>
              <i className="fa-regular fa-eye absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md"></i>
              <Image
                className="object-contain lg:object-cover w-[178px] h-[129px] mx-auto mt-16"
                src={data.productimage}
                alt={data.Productname}
                width={178}
                height={129}
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 px-1 pb-3 flex flex-col justify-end h-auto lg:h-[70px]">
              <h5 className="text-[14px] sm:text-[16px] font-semibold tracking-tight text-gray-900">
                {data.Productname}
              </h5>
              <div className="flex gap-2 items-center">
                <span className="text-[14px] sm:text-[16px] font-500 text-[#DB4444]">
                  {data.ProductPrice}
                </span>
                <span className="text-[14px] sm:text-[16px] font-600 ml-2 text-gray-500 line-through">
                  {data.originalPrice}
                </span>
              </div>
              <div className="flex space-x-1.5">
                {/* Star Ratings */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 ${
                      i < 4 ? 'fill-[#facc15]' : 'fill-[#CED5D8]'
                    }`}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <p className="text-sm sm:text-base text-gray-800 !ml-2">50</p>
              </div>
            </div>
        </Link>
          </div>
        ))}
      </div>
      

  <div className='flex items-center justify-center mt-0 lg:mt-16'> <button className='tracking-[1px] w-[234px] h-[56px] rounded-[4px] bg-transparent text-[16px] font-[500] text-[#fafafa]'>View All Products </button></div>
  </div>
  
  <div className='flex items-center justify-center mt-8 lg:mt-16'> <Link href="/details"><button className='tracking-[1px] w-[234px] h-[56px] rounded-[4px] bg-[#db4444] text-[16px] font-[500] text-[#fafafa]'>View All Products </button></Link></div>
 
{/* lastpage */}
<div className='lg:mx-[0px] mx-[0px] mt-[106px]'>
  <div className='flex items-center gap-[16px]'>
    <div className='w-[20px] h-[40px] bg-[#db4444] rounded-[4px]'></div>
    <p className='text-[16px] font-[600] text-[#db4444]'>Featured</p>
  </div>

  <div className='flex flex-col lg:flex-row items-start lg:items-center gap-[18px] lg:gap-[74px]'>
    <p className='text-[36px] font-[600] tracking-wider mt-6'>New Arrival</p>
    <div className='gap-[40px] flex items-center justify-center'>
     
    </div>
  </div>
</div>

{/* seconddiv */}
<div className='mt-8'>
  <div className='flex w-full'></div>
  <div className='flex gap-4 flex-col lg:flex-row'>
    <div className='w-full lg:w-[570px]  relative flex items-end justify-center  rounded-[4px] h-auto lg:h-[600px] bg-black'>
      <div className='bg-center'>
      <Image
  className="w-[511px] h-[511px] object-cover"
  src="/pictures/ps5.png"
  alt="PS5"
  width={511}
  height={511}
/>
        <div className='w-[242px] absolute bottom-4 left-6 space-y-2 h-[122px]'>
          <p className='text-[24px] font-[600] text-[#fafafa]'>PlayStation 5</p>
          <p className='text-[#fafafa] font-[400] text-[14px]'>Black and White version of the PS5 coming out on sale.</p>
          <Link href="/details"> <p className='text-[16px] w-[75px] border-b-[1px] border-[#ffffff] text-[#ffffff] font-[500]'>Shop Now</p></Link>
        </div>
      </div>
    </div>
    <div className='w-full lg:w-[550px] h-auto lg:h-[600px] flex-col flex space-y-6'>
      <div className='w-full lg:w-[492px] flex items-center lg:justify-start justify-center relative rounded-[4px] bg-[#0D0D0D] h-[284px]'>
        <div>
        <Image
  className="w-[322px] h-[284px] object-cover rounded-[4px]"
  src="/pictures/girl.jpeg"
  alt="Girl"
  width={322}
  height={284}
/>
          <div className='w-[242px] absolute rounded-[4px] bottom-4  right-4 space-y-2 h-[122px]'>
            <p className='text-[24px] font-[600] rounded-[4px] text-[#fafafa]'>Women's Collections</p>
            <p className='text-[#fafafa] tracking-wide font-[400] text-[14px]'>Featured woman collections that give you another vibe.</p>
            <p className='text-[16px] w-[75px] border-b-[1px] border-[#ffffff] text-[#ffffff] font-[500]'>Shop Now</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[550px] flex lg:flex-row flex-col gap-3 h-auto lg:h-[284px]'>
        
      <div className='w-full flex items-center justify-center lg:w-[240px] relative h-[290px] rounded-[4px] bg-[#0D0D0D]'>
          <div className='mr-12 lg:mr-0 mt-4'>
          <Image
  className="w-[210px] h-[222px] object-cover"
  src="/pictures/3speakers.png"
  alt="PS5"
  width={210}
  height={222}
/>
            <div className='w-[191px] absolute bottom-1 left-4 space-y-1 h-[102px]'>
              <p className='text-[24px] font-[600] tracking-wide text-[#fafafa]'>Speakers</p>
              <p className='text-[#fafafa] font-[400] tracking-wide text-[14px]'>Amazon wireless speakers.</p>
              <p className='text-[16px] w-[75px] border-b-[1px] border-[#ffffff] text-[#ffffff] font-[500]'>Shop Now</p>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center lg:w-[240px] relative h-[290px] rounded-[4px] bg-[#0D0D0D]'>
          <div className='mt-4'>
          <Image
  className="w-[210px] h-[222px] object-cover"
  src="/pictures/perfume.png"
  alt="PS5"
  width={210}
  height={222}
/>
            <div className='w-[191px] absolute bottom-1 left-4 space-y-1 h-[102px]'>
              <p className='text-[24px] font-[600] tracking-wide text-[#fafafa]'>Perfume</p>
              <p className='text-[#fafafa] font-[400] tracking-wide text-[14px]'>GUCCI INTENSE OUD EDP.</p>
              <p className='text-[16px] w-[75px] border-b-[1px] border-[#ffffff] text-[#ffffff] font-[500]'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="flex justify-center">
<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-evenly items-center gap-32">
  <div className="h-40 w-52 flex flex-col items-center">
    <div className="flex justify-center">
      <div className="m-1 mt-4 bg-[#6a696c] rounded-full w-14 h-14 flex items-center justify-center">
        <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-shipping-fast text-white text-[20px]"></i>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-2">
      <h6 className="text-sm font-bold">FREE AND FAST DELIVERY</h6>
    </div>

    <div className="flex justify-center mt-2">
      <p className="text-xs text-center">Free delivery for all orders over $140</p>
    </div>
  </div>

  <div className="h-40 w-52 flex flex-col items-center">
    <div className="flex justify-center">
      <div className="m-1 mt-4 bg-[#6a696c] rounded-full w-14 h-14 flex items-center justify-center">
        <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-comments text-white text-[20px]"></i>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-2">
      <h6 className="text-sm font-bold">24/7 CUSTOMER SERVICE</h6>
    </div>

    <div className="flex justify-center mt-2">
      <p className="text-xs text-center">Friendly 24/7 customer support</p>
    </div>
  </div>

  <div className="h-40 w-52 flex flex-col items-center">
    <div className="flex justify-center">
      <div className="m-1 mt-4 bg-[#6a696c] rounded-full w-14 h-14 flex items-center justify-center">
        <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-shield-alt text-white text-[20px]"></i>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-2">
      <h6 className="text-sm font-bold">MONEY BACK GUARANTEE</h6>
    </div>

    <div className="flex justify-center mt-2">
      <p className="text-xs text-center">We return money within 30 days</p>
    </div>
  </div>
</div>
</div>


</div>



    </div>
    
  )
}

export default Product