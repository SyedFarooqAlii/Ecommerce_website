  import Link from 'next/link';
import React from 'react'

  const Error = () => {
    return (
      <div className="flex flex-col items-center min-h-screen p-4 md:p-12">
    

      <div className="w-full max-w-[1100px]">

      <div className="flex gap-1 text-sm">
            <p className="opacity-50">Home /</p>
            <span>Error</span>
          </div>


  <div className='m-32 flex items-center justify-center'>
    <div ><h1 className='text-6xl font-extrabold'>404 NOT FOUND</h1>
      <p className='flex justify-center mt-6'>Your visited page not found. You may go home page.</p>
      <div className="flex justify-center mt-10">
             <Link href="/product">  <button className="px-8 py-3 text-white bg-[#DB4444] rounded-sm">
                  Back To Home Page
                </button></Link> 
              </div> </div>
  
  </div>

          </div>
      </div>
    )
  }

  export default Error;
