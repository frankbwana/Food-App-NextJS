import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const FeatureItems = () => {
  return (
    <div className=' w-full overflow-x-scroll text-blue-500'>
      {/*Wrapper*/}
      <div className=' w-max flex'>
        {/*single items*/}
        {
          featuredProducts.map(item=> (
            <div key={item.id} className=' w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-blue-50 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
         {/*image container*/}
         {item.img && (
         <div className=' relative flex-1 w-full'>
          <Image src={item.img} alt='' fill className=' object-contain'/>
         </div>)}
         {/*text items*/}
         <div className=' flex-1 flex flex-col gap-4 items-center justify-center text-center'>
          <h1 className=' text-lg uppercase font-bold'>{item.title}</h1>
          <p className=' p-4'>{item.desc}</p>
          <span className=' text-xl font-bold'>${item.price}</span>
          <button className=' bg-blue-500 text-white rounded-xl p-2'>Add to Cart</button>
         </div>
        </div>
          ))
          }
      </div>
    </div>
  )
}

export default FeatureItems