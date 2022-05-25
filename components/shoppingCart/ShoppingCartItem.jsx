import React from 'react'
import {GrClose} from 'react-icons/gr'

const ShoppingCart = () => {
  return (
    <div className=' mini-product-cont'> 
    <div className='mini-product-img'>
        <img src='https://i.pinimg.com/564x/51/95/60/519560992ac0284dcb03c15c202c16d2.jpg'></img>

    </div>
    <div className='mini-product-desc '>
       <div className='flex flex-col gap-3 w-[100%]' >
        <div className='desc-header'>
            <h1 className='mini-desc-title'>
                Теннисная Юбка 
            </h1>
            <GrClose className='cursor-pointer close-mini' />

        </div>
      
        <h1 className='size-color-mini'> Белый / S </h1>
       
        </div> 
       
        <div className='flex items-center justify-between w-[100%]' >
            <p className='qty-mini'>к-во 2</p>
            <p className='price-mini'> P 3000</p>
        </div>

    </div>

    </div>
  )
}

export default ShoppingCart