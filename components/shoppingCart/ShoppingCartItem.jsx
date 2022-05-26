import React from 'react'
import {GrClose} from 'react-icons/gr'
import { useContext } from 'react'
import CartContext from '../../context/StateContext'
import { urlFor } from '../../lib/client'

const ShoppingCart = ({cart}) => {
    const {title, colorValue, sizeValue , price ,image, qty, slug} = cart

    const { removeItem} = useContext(CartContext)
 
  return (
    <div className=' mini-product-cont'> 
    <div className='mini-product-img'>
        <img src={urlFor(image[0])}></img>

    </div>
    <div className='mini-product-desc '>
       <div className='flex flex-col gap-3 w-[100%]' >
        <div className='desc-header'>
            <h1 className='mini-desc-title'>
              {title}
            </h1>
            <GrClose className='cursor-pointer close-mini' onClick={() => removeItem(slug)} />

        </div>
      
        <h1 className='size-color-mini'> {colorValue} / {sizeValue} </h1>
       
        </div> 
       
        <div className='flex items-center justify-between w-[100%]' >
            <p className='qty-mini'>к-во {qty}</p>
            <p className='price-mini'> P {price}</p>
        </div>

    </div>

    </div>
  )
}

export default ShoppingCart