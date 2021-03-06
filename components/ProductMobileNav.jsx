import React, {useState} from 'react'
import Link from 'next/link'
import {IoIosArrowRoundBack} from 'react-icons/io'
import ShoppingCartMini from './assets/ShoppingCartMini'
import CartContext from '../context/StateContext'
import { useContext } from 'react'

const ProductMobileNav = () => {

  const {cartItems, shoppingCart, setShoppingCart} = useContext(CartContext)
  return (
    <div className='absolute navbar-mobile '>
    <div className='nabvar-content'>
        
      
        <div className='flex flex-col justify-between gap-1'>
           <Link  href='/products'>
            <IoIosArrowRoundBack color='#434343' size={30} />
            </Link>
        </div>
       
        
        <div className='flex items-center gap-.6 cursor-pointer' onClick={() => setShoppingCart(prev => !prev)}>
        <svg id="bag" class="icon-bag" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#434343" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
        <span className='text-xs dark-color'>({cartItems.length})</span>
        </div>
     
     </div>
     {shoppingCart && 
       <ShoppingCartMini setShoppingCart={setShoppingCart} />
      }

</div>
  )
}

export default ProductMobileNav