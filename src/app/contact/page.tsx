import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-12">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />

      <div className="w-full max-w-[1100px]">
        {/* 1st section */}
        <div className="flex gap-1 text-sm">
          <p className="opacity-50">Home /</p>
          <span>Contact</span>
        </div>

        {/* Bottom section */}
        <div className="mt-14 flex flex-col lg:flex-row m-4">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            {/* Call to Us Section */}
            <div>
              <div className="flex items-center gap-3">
                {/* Upper box */}
                <div className="flex justify-center items-center w-12 h-12 bg-[#DB4444] text-white rounded-full">
                  <i className="fas fa-phone text-lg"></i>
                </div>
                <span className="text-lg font-semibold">Call To Us</span>
              </div>
              <div className="mt-4">
                <p>We are available 24/7, 7 days a week.</p>
                <p className="mt-2">Phone: +8801611112222</p>
              </div>
              <div className="border-t-2 flex justify-center items-center mt-6 opacity-50 w-full lg:w-72 border-black"></div>
            </div>

            {/* Write to Us Section */}
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-12 h-12 bg-[#DB4444] text-white rounded-full">
                  <i className="fas fa-envelope text-lg"></i>
                </div>
                <span className="text-lg font-semibold">Write To Us</span>
              </div>
              <p className="mt-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mt-3">Emails: customer@exclusive.com</p>
              <p className="mt-3">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 p-4 bg-[#F9F9F9] rounded-md">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#F5F5F5] w-full lg:w-[48%] h-10 pl-4 rounded-sm"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#F5F5F5] w-full lg:w-[48%] h-10 pl-4 rounded-sm"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-[#F5F5F5] w-full h-10 pl-4 rounded-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="bg-[#F5F5F5] w-full h-40 pl-4 pt-4 rounded-sm mt-3 resize-none"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-3 text-white bg-[#DB4444] rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;