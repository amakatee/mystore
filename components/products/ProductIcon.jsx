import React from 'react'

const ProductIcon = ({img}) => {
  return (
    <div key={img} className="product-icon-cont">
        <div className='product-icon-img'>
            <img src={img}></img>
        </div>
        <div className='product-icon-desc'>
            <h2 className='product-icon-title'>Silver Ring</h2>
            <p className='product-icon-price'>P 2440</p>
         </div>
    </div>
  )
}

export default ProductIcon