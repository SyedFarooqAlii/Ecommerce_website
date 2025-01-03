import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Loginin = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
       {/* Sign-In Card Section */}
       <div className="min-h-screen flex mt-10 items-center justify-center bg-white">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg font-[sans-serif]">
          <form>
            <div className="mb-8">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
            </div>

           
            <div>
  <label className="text-gray-800 text-[15px] mb-2 mt-2 block">Email</label>
  <div className="relative flex items-center bg-[#f3f4f6] border border-gray-300 rounded-md" style={{ height: "50px", width: "100%" }}>
    <i className="fa-regular fa-envelope text-gray-600 text-lg ml-3"></i>
    <input
      name="email"
      type="text"
      required
      className="w-full text-sm text-gray-800 bg-transparent focus:outline-none px-2"
      placeholder="Enter Email"
    />
  </div>
</div>




<div>
  <label className="text-gray-800 text-[15px] mb-2 mt-2 block">Password</label>
  <div className="relative flex items-center bg-[#f3f4f6] border border-gray-300 rounded-md" style={{ height: "50px", width: "100%" }}>
    <i className="fa-solid fa-lock text-gray-600 text-lg ml-3"></i>
    <input
      name="password"
      type="password"
      required
      className="w-full text-sm text-gray-800 bg-transparent focus:outline-none px-2"
      placeholder="Enter Password"
    />
  </div>
</div>
            <div className="flex items-center gap-4 mt-4">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#DB4444] focus:ring-[#DB4444] border-gray-300 rounded-md"
              />
              <label htmlFor="remember-me" className="text-sm">
                Remember me
              </label>
            </div>

            <div className="mt-4 text-right">
              <a
                href="javascript:void(0);"
                className="text-[#828282] font-normal text-sm hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-[#DB4444] focus:outline-none"
              >
                Sign in
              </button>
            </div>

            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full h-[44px] flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
               <Image
                           src="/pictures/google.png"
                           alt=''
                           className="w-7 h-7"
                           width={30}
                           height={30}
                           />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full mt-2 h-[44px] flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <i className="text-black text-[22px] fa-brands fa-apple"></i>
              Continue with Apple
            </button>
          </form>
        </div></div>
    </div>
  )
}

export default Loginin
