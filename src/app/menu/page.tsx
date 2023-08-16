import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className=' p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map(category=>(
        <Link href={`/menu/${category.slug}`}
         key={category.id}
          className=' w-full h-1/3 bg-cover p-8 md:h-[70vh]' 
          style={{backgroundImage:`url(${category.img})`}}>
          <div className={`text-black w-1/2`}>
            <h1 className=' font-bold uppercase text-2xl'>{category.title}</h1>
            <p className=' text-sm my-6 md:pb-8'>{category.desc}</p>
            <button className= {` hidden md:block bg-blue-500 text-white rounded-xl py-2 px-4 hover:bg-blue-400`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage