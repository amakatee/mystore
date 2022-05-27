import React, {useRef,useEffect} from 'react'
import NavbarDark from '../../components/NavbarDark'
import ProductIcon from '../../components/products/ProductIcon'
import Navigation from './../../components/products/Navigation'
import {client} from './../../lib/client'
import InnerLayout from '../../components/InnerLayout'




const Products = ({products}) => {

  
    
  return (
    <>
    <InnerLayout>

    {products.map(product => <ProductIcon product={product} />)}

    </InnerLayout>
    </>

    // <>
    // <NavbarDark />
    // <div className='products-content' >
    //     <Navigation />
    //     <div className='products-area'>
    //     <div className='products-section'>
    //         {products.map(product => <ProductIcon product={product} />)}

    //     </div>
    //     </div>

    // </div>
     
    // </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'product']`
  const products = await client.fetch(query)

  return {
    props: {products}
  }
}

export default Products