import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className=' flex flex-wrap text-blue-500'>
     {pizzas.map(item=>(
      <Link href={`/product/${item.id}`} key={item.id} className=' w-full h-[60vh] border-r-2 border-b-2 border-blue-400 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group'>
        {item.img && (
          <div className=' relative h-[80%]'>
            <Image src={item.img} alt='' fill  className=' object-contain'/>
          </div>
        )}
         <div className=' flex items-center justify-between'>
        <h1 className=' uppercase'>{item.title}</h1>
        <h2 className=' group-hover:hidden'>${item.price}</h2>
        <button className=' hidden group-hover:block uppercase bg-blue-500 rounded-xl text-white p-2'>Add to Cart</button>
         </div>
      </Link>
     ))}
     
    </div>
  )
}

export default CategoryPage