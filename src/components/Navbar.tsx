import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import { AiFillPhone } from 'react-icons/ai'

const Navbar = () => {
  
   const user = false
  return (
    <div className=' h-12 md:h-24 text-blue-400 px-4 w-full flex items-center justify-between border-b-2 border-blue-500 lg:px-20 xl:px-40'>
     <div className=' hidden md:flex gap-4 flex-1'>
      <Link href='/'>HomePage</Link>
      <Link href='/menu'>Menu</Link>
      <Link href='/'>Contact</Link>
     </div>
      <div className=' uppercase text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>BwanaFoods</Link> 
      </div>
      <div className=' md:hidden'>
        <Menu />
      </div>
      <div className=' hidden md:flex gap-4 items-center flex-1 justify-end'>
        <div className=' md:absolute top-3 r-2 lg:static flex items-center gap-2 bg-slate-200 rounded-xl'>
          <AiFillPhone />
          <span>+254719637558</span>
        </div>
      {!user ? (<Link href='/login'>Login</Link>) :
      (<Link href='/orders'>Orders</Link>)}
      <CartIcon />
     </div>
    </div>
  )
}

export default Navbar