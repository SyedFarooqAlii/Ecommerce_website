import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-12">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />
      <div className="w-full max-w-[1100px]">
        <div className="flex gap-1 text-sm md:text-base">
          <p className="opacity-50">Home / </p> <span> About</span>
        </div>

        {/* 1st sec */}
        <div className="flex flex-col md:flex-row mt-6 justify-between gap-4">
          <div className="w-full md:w-2/5 mt-4">
            <h1 className="text-2xl md:text-4xl font-bold">Our Story</h1>
            <p className="mt-4 text-sm md:text-base">
              Launced in 2015, Exclusive is South Asia premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3
              millioons customers across the region.
            </p>
            <p className="mt-4 text-sm md:text-base">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className="w-full md:w-1/2">
          <Image
  className="object-cover w-full h-auto"
  src="/pictures/about.jpeg"
  alt="model"
  width={700}
  height={400}
  layout="responsive"
/>
          </div>
        </div>

        {/* 2nd sec */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "10.5k", text: "Sallers active our site", icon: "store" },
            {
              value: "33k",
              text: "Monthly Product Sale",
              icon: "dollar-sign",
              bg: "bg-[#DB4444]",
              textColor: "text-white",
            },
            {
              value: "45.5k",
              text: "Customer active in our site",
              icon: "shopping-bag",
            },
            {
              value: "25k",
              text: "Annual gross sale in our site",
              icon: "sack-dollar",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`border-black border-[1px] h-40 w-full flex flex-col items-center justify-center ${
                item.bg || "bg-transparent"
              }`}
            >
              <div className="flex justify-center">
                <div className="m-1 mt-4 bg-[#6a696c] rounded-full w-14 h-14 flex items-center justify-center">
                  <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
                    <i
                      className={`fas fa-${item.icon} ${
                        item.textColor || "text-white"
                      } text-[20px]`}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <h6
                  className={`text-lg font-bold ${
                    item.textColor || "text-black"
                  }`}
                >
                  {item.value}
                </h6>
              </div>

              <div className="flex justify-center">
                <p
                  className={`text-sm ${
                    item.textColor || "text-black"
                  } text-center`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
     
{/* 3rd sec */}
<div className="mt-14 flex flex-col sm:flex-row justify-center gap-8 items-center">
<div className="h-80 w-60">
  <Image
    src="/pictures/person1.png"  
    alt=""
    className="h-56 w-full object-contain bg-[#F5F5F5]"
    width={240}  
    height={224} 
  />
  <div className="ml-2">
    <h6 className="mt-3 text-lg font-semibold">Tom Cruise</h6>
    <p>Founder & Chairman</p>
    <div className="mt-2 flex space-x-4">
      <i className="fab fa-twitter text-blue-500"></i>
      <i className="fab fa-instagram text-pink-500"></i>
      <i className="fab fa-linkedin text-blue-700"></i>
    </div>
  </div>
</div>

  <div className="h-80 w-60">
  <Image
    src="/pictures/person2.png" 
    alt=""
    className="h-56 w-full object-contain bg-[#F5F5F5]"
    width={240}  
    height={224} 
  />
    <div className="ml-2">
      <h6 className="mt-3 text-lg font-semibold">Emma Watson</h6>
      <p>Managing Director</p>

      <div className="mt-2 flex space-x-4">
        <i className="fab fa-twitter text-blue-500"></i>
        <i className="fab fa-instagram text-pink-500"></i>
        <i className="fab fa-linkedin text-blue-700"></i>
      </div>
    </div>
  </div>

  <div className="h-80 w-60">
  <Image
    src="/pictures/person3.png"
    alt=""
    className="h-56 w-full pt-2 object-contain bg-[#F5F5F5]"
    width={240}  
    height={224} 
  />
    <div className="ml-2">
      <h6 className="mt-3 text-lg font-semibold">Will Smith</h6>
      <p>Product Designer</p>

      <div className="mt-2 flex space-x-4">
        <i className="fab fa-twitter text-blue-500"></i>
        <i className="fab fa-instagram text-pink-500"></i>
        <i className="fab fa-linkedin text-blue-700"></i>
      </div>
    </div>
  </div>
</div>

{/* 4th sec */}
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
  );
};

export default About;
