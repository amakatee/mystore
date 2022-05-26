import React from 'react'
import InnerLayout from '../../components/InnerLayout'
import { useContext } from 'react'
import CartContext from '../../context/StateContext'
import ProductIcon from '../../components/products/ProductIcon'

const jewelry = () => {
    const {jewelry} = useContext(CartContext)
    
  return (
      <InnerLayout>
      {jewelry.map(product => <ProductIcon product={product} />)}
    </InnerLayout>
  )
}

export default jewelry