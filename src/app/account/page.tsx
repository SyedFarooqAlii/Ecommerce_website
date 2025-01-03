import React from 'react';

const Account = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[1100px] m-4 md:m-12">
        {/* 1st section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex gap-1 text-sm">
            <p className="opacity-50">Home /</p>
            <span>My Account</span>
          </div>
          <div className="flex gap-1 text-sm mt-3 md:mt-0">
            <p>Welcome!</p>
            <span className="text-[#DB4444] font-medium">Syed Farooq</span>
          </div>
        </div>
        {/* 2nd section */}
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/3">
            <div className="mb-6">
              <p className="font-medium text-lg">Manage My Account</p>
              <div className="mt-3 ml-5">
                <p className="text-[#DB4444]">My Profile</p>
                <p className="opacity-50">Address Book</p>
                <p className="opacity-50">My Payment Options</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-medium text-lg">My Orders</p>
              <div className="mt-3 ml-5">
                <p className="opacity-50">My Returns</p>
                <p className="opacity-50">My Cancellations</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-lg">My Wishlist</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full lg:w-2/3">
            <div className="p-4 md:p-9 bg-white shadow-md rounded-md">
              <p className="text-[#DB4444] font-medium text-xl">Edit Your Profile</p>
              {/* First Row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-sm">First Name</p>
                  <input
                    type="text"
                    placeholder="Md"
                    className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Last Name</p>
                  <input
                    type="text"
                    placeholder="Rimel"
                    className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                  />
                </div>
              </div>
              {/* Second Row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <input
                    type="text"
                    placeholder="rimel1111@gmail.com"
                    className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Address</p>
                  <input
                    type="text"
                    placeholder="Kingston, 5236, United State"
                    className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                  />
                </div>
              </div>
              {/* Password Section */}
              <div className="mt-6">
                <p className="font-medium text-sm">Password Changes</p>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full h-[50px] mt-2 rounded-[4px] bg-[#f5f5f5] pl-4"
                />
              </div>
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 justify-end">
                <button className="text-gray-600">Cancel</button>
                <button className="px-8 py-3 text-white bg-[#DB4444] rounded-md">Apply Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;