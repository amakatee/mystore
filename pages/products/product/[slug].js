import React, { useEffect, useState } from 'react'
import SingleCarousel from '../../../components/singleProduct/SingleCarousel'
import SingleDesc from '../../../components/singleProduct/SingleDesc'
import NavbarDark from './../../../components/NavbarDark'
import MobileCarousel from '../../../components/singleProduct/MobileCarousel'
import ProductMobileNav from '../../../components/ProductMobileNav'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { client } from '../../../lib/client'
import {PortableText} from '@portabletext/react'

const ProductDetails = ({product, products}) => {
    console.log(product, products)
   
    const images = [
        'https://i.pinimg.com/564x/51/95/60/519560992ac0284dcb03c15c202c16d2.jpg',
        'https://i.pinimg.com/564x/00/2e/ec/002eec7d8058600da1ddba54ad26df14.jpg',
        'https://i.pinimg.com/564x/a0/e6/d6/a0e6d688bafd0a6e4450faf08f784c65.jpg',
        'https://i.pinimg.com/736x/22/34/31/2234315ebe8d26b1928a7b4dd05993fd.jpg',
        'https://i.pinimg.com/564x/e8/26/e0/e826e0ec646e1eef37a26654d74902ea.jpg',
        'https://i.pinimg.com/564x/e8/26/e0/e826e0ec646e1eef37a26654d74902ea.jpg'
 
 
    ]
  
    // const descPos = useSpring({ y:0})
    // const bindPosition = useDrag((params) => {
    //    const y = params.xy[1]
    //    if(y >= 0 ){
    //     descPos.y.set(y)
        

    //    }
       
    // })

  return (
      <>
     
    <div className=' width-[100vw] overflow-hidden '>
       
        <div className='single-prod-flex w-[100vw] mx-auto'>
            <div className='mobile-single-carousel'>
                <MobileCarousel  images={product.image}/>
                <ProductMobileNav />
                
            </div>
         <div  className=' single-product-desc' >
             <SingleDesc product={product}  />

        </div>
        <div className='single-product-carousel pt-[14vh]'>
            <SingleCarousel images={product.image} />
            <NavbarDark />
        </div> 
        </div>
       
    </div>
    </>
  )
}
export const getStaticPaths  = async() => {
    const query = `*[_type == 'product'] {
        slug {
            current
        }
    }`
    const products = await client.fetch(query)
    const paths = products.map(product => ({
        params: {
            slug: product.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps = async ({params: {slug}}) => {
    const query =`*[_type == "product" && slug.current == '${slug}'][0]`
    const productsQuery = `*[_type == "product"]`
    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)
    return {
        props: {product, products}
    }
}

export default ProductDetails