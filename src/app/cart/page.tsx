import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className=' h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-blue-500 lg:flex-row '>
      <div className=' h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-10 xl:px-20'>
        <div className=' flex items-center justify-between mb-4 '>
          <Image src="/slide3.jpg" alt='' width={100} height={100} />
          <div>
            <h1 className=' uppercase font-bold'>Avocado Vegetable</h1>
            <span>Large</span>
          </div>
          <h2 className=' font-bold'>$70.50</h2>
          <span className=' cursor-pointer'>X</span>
        </div>
        <div className=' flex items-center justify-between mb-4 '>
          <Image src="/slide8.jpg" alt='' width={100} height={100} />
          <div>
            <h1 className=' uppercase font-bold'>Avocado Vegetable</h1>
            <span>Large</span>
          </div>
          <h2 className=' font-bold'>$70.50</h2>
          <span className=' cursor-pointer'>X</span>
        </div>
        <div className=' flex items-center justify-between mb-4 '>
          <Image src="/slide10.jpg" alt='' width={100} height={100} />
          <div>
            <h1 className=' uppercase font-bold'>Avocado Vegetable</h1>
            <span>Large</span>
          </div>
          <h2 className=' font-bold'>$70.50</h2>
          <span className=' cursor-pointer'>X</span>
        </div>
      </div>
      <div className=' h-1/2 p-4 bg-blue-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10 xl:px-20'>
        <div className=' flex justify-between'>
          <span>Subtotal (3 items)</span>
          <span>$59.75</span>
        </div>
        <div className=' flex justify-between'>
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className=' flex justify-between'>
          <span>Delivery Cost</span>
          <span className=' text-green-600'>FREE</span>
        </div>
        <hr className=' my-2' />
        <div className=' flex justify-between'>
          <span>Total Cost</span>
          <span className=' font-bold'>$59.75</span>
        </div>
        <button className=' p-3 bg-blue-500 rounded-xl text-white hover:bg-blue-400 w-1/2 self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage