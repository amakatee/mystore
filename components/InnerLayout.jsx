import React from 'react'
import NavbarDark from './NavbarDark'
import Navigation from './products/Navigation'

const InnerLayout = ({children}) => {
  return (
    <>
    <NavbarDark />
    <div className='products-content' >
        <Navigation />
        <div className='products-area'>
        <div className='products-section'>
            {children}

        </div>
        </div>

    </div>
     
    </>
  )
}

export default InnerLayout