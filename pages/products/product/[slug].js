import React, { useEffect, useState } from 'react'
import SingleCarousel from '../../../components/singleProduct/SingleCarousel'
import SingleDesc from '../../../components/singleProduct/SingleDesc'
import NavbarDark from './../../../components/NavbarDark'
import MobileCarousel from '../../../components/singleProduct/MobileCarousel'
import ProductMobileNav from '../../../components/ProductMobileNav'
import {useDrag} from 'react-use-gesture'
import {useSpring, animated} from 'react-spring'

const ProductDetails = () => {
    const images = [
        'https://i.pinimg.com/564x/51/95/60/519560992ac0284dcb03c15c202c16d2.jpg',
        'https://i.pinimg.com/564x/00/2e/ec/002eec7d8058600da1ddba54ad26df14.jpg',
        'https://i.pinimg.com/564x/a0/e6/d6/a0e6d688bafd0a6e4450faf08f784c65.jpg',
        'https://i.pinimg.com/736x/22/34/31/2234315ebe8d26b1928a7b4dd05993fd.jpg',
        'https://i.pinimg.com/564x/e8/26/e0/e826e0ec646e1eef37a26654d74902ea.jpg',
        'https://i.pinimg.com/564x/e8/26/e0/e826e0ec646e1eef37a26654d74902ea.jpg'
 
 
    ]
  
    const descPos = useSpring({ y:0})
    const bindPosition = useDrag((params) => {
        descPos.y.set(params.offset[1])
        
    })

  return (
      <>
     
    <div className=' width-[100vw] '>
       
        <div className='single-prod-flex w-[100vw] mx-auto'>
            <div className='mobile-single-carousel'>
                <MobileCarousel  images={images}/>
                <ProductMobileNav />
                
            </div>
         <animated.div {...bindPosition()} className='single-product-desc '  
         style={{ y:descPos.y}}>
             <SingleDesc />

        </animated.div>
        <div className='single-product-carousel pt-[14vh]'>
            <SingleCarousel images={images} />
            <NavbarDark />
        </div> 
        </div>
       
    </div>
    </>
  )
}

export default ProductDetails