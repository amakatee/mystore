import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/client'
const ProductIcon = ({product}) => {
  console.log(product.title)
 
  return (
    <Link href={`/products/product/${product.slug.current}`}>
    <div  className="product-icon-cont">
        <div className='product-icon-img'>
            <img src={urlFor(product.image[0])}></img>
        </div>
        <div className='product-icon-desc'>
            <h2 className='product-icon-title'>{product.title}</h2>
            <p className='product-icon-price'>₽ {product.price}</p>
         </div>
    </div>
    </Link>
  )
}

export default ProductIcon