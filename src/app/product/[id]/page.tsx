import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className=' p-4 lg:px-20 xl:px-40 flex flex-col justify-around text-blue-500 md:flex-row'>
      {singleProduct.img && (
      <div className=' relative'>
        <Image src={singleProduct.img} alt='' className='object-contain' fill />
      </div>)}
      <div>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  )
}

export default SingleProduct