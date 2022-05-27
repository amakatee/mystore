import React, { useEffect, useState, useRef } from 'react'
import SingleCarousel from '../../../components/singleProduct/SingleCarousel'
import SingleDesc from '../../../components/singleProduct/SingleDesc'
import NavbarDark from './../../../components/NavbarDark'
import MobileCarousel from '../../../components/singleProduct/MobileCarousel'
import ProductMobileNav from '../../../components/ProductMobileNav'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { client } from '../../../lib/client'
import {PortableText} from '@portabletext/react'
import gsap from 'gsap/dist/gsap'

const ProductDetails = ({product, products}) => {
    
   
   
    const productRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(productRef.current, {opacity:0} , {opacity:1, duration: .95})
    })
  
    // const descPos = useSpring({ y:0})
    // const bindPosition = useDrag((params) => {
    //    const y = params.xy[1]
    //    if(y >= 0 ){
    //     descPos.y.set(y)
        

    //    }
       
    // })

  return (
      <>
     
    <div ref={productRef} className=' width-[100vw] overflow-hidden '>
       
        <div   className='single-prod-flex w-[100vw] mx-auto'>
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