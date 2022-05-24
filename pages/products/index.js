import React from 'react'
import NavbarDark from '../../components/NavbarDark'
import ProductIcon from '../../components/products/ProductIcon'
import Navigation from './../../components/products/Navigation'


const Products = () => {
    const images = [


        'https://i.pinimg.com/564x/0d/36/4c/0d364c24bce6b5500dcd40979a756906.jpg',
        'https://i.pinimg.com/564x/1c/66/b1/1c66b13d9f380d3b4b4279f9f3243874.jpg',
        'https://i.pinimg.com/564x/d5/d5/6a/d5d56a5f4b44553616de3c7199cbdc4c.jpg',
        'https://i.pinimg.com/564x/0d/36/4c/0d364c24bce6b5500dcd40979a756906.jpg',
        'https://i.pinimg.com/564x/1c/66/b1/1c66b13d9f380d3b4b4279f9f3243874.jpg',
        'https://i.pinimg.com/564x/d5/d5/6a/d5d56a5f4b44553616de3c7199cbdc4c.jpg'
 
 
    ]
  return (
    <>
    <NavbarDark />
    <div className='products-content' >
        <Navigation />
        <div className='products-area'>
        <div className='products-section'>
            {images.map(img => <ProductIcon key={img} img={img} />)}

        </div>
        </div>

    </div>
     
    </>
  )
}

export default Products