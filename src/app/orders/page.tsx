import React from 'react'

const OrdersPage = () => {
  return (
    <div className=' p-4 lg:px-20 xl:px-40'>
      <table className=' w-full border-separate border-spacing-3'>
        <thead>
          <tr className=' text-left'>
            <th className=' hidden md:block'>Order</th>
            <th>Date</th>
            <th>Price</th>
            <th className=' hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
          <tr className=' text-sm md:text-base odd:bg-gray-200'>
            <td className=' hidden md:block'>123456789</td>
            <td className=''>16.08.2023</td>
            <td className=''>79.56</td>
            <td className=' hidden md:block'>Spicy Arrabbiata</td>
            <td className=''>Delivered</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default OrdersPage