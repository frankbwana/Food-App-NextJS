import Link from 'next/link'
import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'

const CartIcon = () => {
  return (
    <Link href='/cart' className=' flex items-center gap-2'>
        <div>
            <BsFillCartCheckFill />
        </div>
        <span>Cart (3) </span>
    </Link>
  )
}

export default CartIcon