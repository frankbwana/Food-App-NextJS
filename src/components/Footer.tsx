import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-between h-12 p-4 lg:px-20 xl:px-40 text-cyan-600'>
      <Link href='/' className=' font-bold text-lg'>BwanaFoods</Link>
      <p>All Rights Reserved.</p>
    </div>
  )
}

export default Footer