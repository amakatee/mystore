import React, {useEffect, useRef} from 'react'
import NavbarDark from './NavbarDark'
import Navigation from './products/Navigation'
import gsap from 'gsap/dist/gsap'

const InnerLayout = ({children}) => {
  const productsRef = useRef()
  useEffect(() => {
    gsap.fromTo(productsRef.current, {opacity: 0} , {opacity: 1, duration: 1.8} )
  })
  
  return (
    <>
    <NavbarDark />
    <div className='products-content' >
        <Navigation />
        <div className='products-area'>
        <div ref={productsRef} className='products-section'>
            {children}

        </div>
        </div>

    </div>
     
    </>
  )
}

export default InnerLayout