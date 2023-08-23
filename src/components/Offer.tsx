import Image from 'next/image'
import React from 'react'



const Offer = () => {
  return (
    <div className=' h-screen flex flex-col md:flex-row bg-[url("/background2.jpg")] md:justify-between md:h-[70vh]'>
      <div className=' flex-1 flex flex-col items-center justify-center text-center gap-8 p-6'>
        <h1 className='text-3xl font-bold xl:text-5xl'>A masterpiece of nature's bounty</h1>
       <p className=' xl:text-xl'>Harmony on a Plate: Our vibrant vegetable medley is a symphony of colors, flavors, and nutrients</p>
        <button className=' bg-blue-500 text-white p-4 rounded-xl'>Order Now</button>
      </div>
      <div className=' relative flex-1'>
        <Image src='/slide10.jpg' alt='' fill className=' object-contain'/>
      </div>
    </div>
  )
}

export default Offer