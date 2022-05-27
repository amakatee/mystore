import React, {useContext} from 'react'
import CartContext from '../../context/StateContext'
import { urlFor } from '../../lib/client'

const CheckoutcartItem = ({item}) => {
   
  return (
    <div>
        
            <div>
                 <div className=' mini-product-cont'> 
                    <div className='mini-product-img'>
                    <img src={urlFor(item.image[0])}></img>

                </div>
               <div className='mini-product-desc '>
                   <div className='flex flex-col gap-3 w-[100%]' >
                     <div className='desc-header'>
                        <h1 className='mini-desc-title'>
                          {item.title}
                </h1>
          </div>
      
        <h1 className='size-color-mini'> {item.colorValue} / {item.sizeValue} </h1>
       
        </div> 
       
        <div className='flex items-center justify-between w-[100%]' >
            <p className='qty-mini'>к-во {item.qty}</p>
            <p className='price-mini'> P {item.price}</p>
        </div>

    </div>

    </div>
               
            </div>
     
    </div>
  )
}

export default CheckoutcartItem