"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import CartIcon from './CartIcon'

const links = [
  { id: 1, title: "HomePage", url: "/"},
  { id: 2, title: "Menu", url: "/menu"},
  { id: 3, title: "Working Hours", url: "/"},
  { id: 4, title: "Contact", url: "/"},

]

const Menu = () => {
  const [open, setOpen] = useState(false)
  
  const user = false 
  return (
    <div>
       <div className=' text-2xl'>
        {!open ? (<FaBars onClick={() => setOpen(true)} />) : ( <RxCross2 onClick={() => setOpen(false)} />)}
      </div>
      {open && (<div className=' bg-blue-400 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10'>
       {links.map( item=>(
        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
       ))}
       {!user ? (<Link href='/login' onClick={() => setOpen(false)}>Login</Link>) :
       (<Link href='/orders' onClick={() => setOpen(false)}>Orders</Link>)}
       <Link href='/cart' onClick={() => setOpen(false)}>
        <CartIcon />
       </Link>
      </div>)}
    </div>
  )
}

export default Menu