"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'



const data = [
  {
    id: 1,
    title: "Plates of Perfection: Where Artistry Meets Appetites",
    image: "/slide1.jpg"
  },
  {
    id: 2,
    title: "Elevate Your Tastebuds: Irresistible Creations Awaits Your Palate",
    image: "/slide18.jpg"
  },
  {
    id: 3,
    title: "Bite into Happiness: Where Every Forkful is a Moment of Joy",
    image: "/slide3.jpg"
  },
]



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
   useEffect(()=>{
     const interval = setInterval(
      ()=>setCurrentSlide((prev) => (prev===data.length - 1 ? 0 : prev + 1)), 4000);
    return () => clearInterval(interval);
   }, [])
  
  return (
    <div className=' flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-blue-50' >
      <div className=' flex-1 flex flex-col items-center justify-center font-bold gap-8 text-blue-400'>
        <h1 className=' text-3xl  text-center uppercase p-4 md:text-5xl lg:text-6xl'>
          {data[currentSlide].title}
        </h1>
        <button className=' text-white bg-blue-500 rounded-xl py-4 px-8'>Order Now</button>
      </div>
      <div className=' w-full flex-1 relative'>
        <Image src={data[currentSlide].image} alt='' fill className=' object-cover'/>
      </div>
    </div>
  )
}
 
export default Slider