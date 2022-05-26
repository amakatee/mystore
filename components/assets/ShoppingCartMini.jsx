import React from 'react'
import {GrClose} from 'react-icons/gr'
import ShoppingCartItem from './../shoppingCart/ShoppingCartItem'
import CartContext from '../../context/StateContext'
import { useContext } from 'react'

const ShoppingCartMini = ({setShoppingCart}) => {
    const {cartItems, totalPrice} = useContext(CartContext)

  return (
    <div className='shoppingCart-mini absolute w-[100%] top-0 right-0 h-[100vh]  bg-white mt-[-1rem]'> 
    <div className='mx-auto w-[80%] pt-[4rem] desctop-cont'>
    <div className='sc-header flex items-center justify-between  pb-[1.5rem] ' >
       <GrClose size={15} onClick={() => setShoppingCart(false) } />
       <h1 className=''>В корзине</h1>
       <div className='flex items-center gap-.6'>
        <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82"
         fill="none" stroke="#434343" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
        <span className='text-xs dark-color'>({cartItems.length})</span>
        </div>
    </div>
    {cartItems.length < 1 ?  <div className='grid content-center text-center mini-prducts-cont'>В корзине пусто :(</div> :
     <div className=' mini-prducts-cont'>
     { cartItems.map(cart =>  <ShoppingCartItem cart={cart} />)}
    

  </div>
    }
   


    </div>
    <div className='total-mini w-[100%]'>
        <div className='subtotal-mini'>
            <p >Суммарно</p>
            <p>P {totalPrice}</p>
        </div>
        <div className='grid content-center'>
            <button className='checkout-btn'>
                Перейти к оплате
            </button>
        </div>
    </div>

       </div>

  )
}

export default ShoppingCartMini