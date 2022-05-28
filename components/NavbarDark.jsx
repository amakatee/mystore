import React, {useState} from 'react'
import Link from 'next/link'
import SideBar from './assets/SideBar'
import ShoppingCartMini from './assets/ShoppingCartMini'
import { useContext } from 'react'
import CartContext from '../context/StateContext'

const NavbarDark = () => {

  const {cartItems,setSideBar, sideBar,shoppingCart, setShoppingCart } = useContext(CartContext)
  
  
  
  return (
    <div className='absolute navbar-dark '>
    <div className='nabvar-content'>
        
      
        <div className='flex flex-col justify-between gap-1 desktop-toggle' onClick={() => setSideBar(prev => !prev)}>
            <span className='w-[28px] h-[1.4px] bg-[#434343]'></span>
            <span className='w-[28px] h-[1.4px] bg-[#434343]'></span>
    
        </div>
        <Link href="/">
        <h1 id='logo' className='cursor-pointer custom-font dark-color'>И́ней </h1>
        </Link>
        
        <div className='flex items-center gap-.6' onClick={() => setShoppingCart(prev => !prev)}>
        <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#434343" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
        <span className='text-xs dark-color'>({cartItems.length})</span>
        </div>
     
     </div>
     { sideBar && 
              <SideBar setSideBar={setSideBar} />
       }
       {shoppingCart && 
       <>
       <ShoppingCartMini setShoppingCart={setShoppingCart} />
       <div  className=' z-[-1] absolute w-[100vw] h-[101vh] top-[-1rem] left-0 bg-[#1a19184b]' onClick={() => setShoppingCart(false)} ></div>
       </>
      }
</div>
  )
}

export default NavbarDark