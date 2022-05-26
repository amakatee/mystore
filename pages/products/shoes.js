import React from 'react'
import InnerLayout from '../../components/InnerLayout'
import { useContext } from 'react'
import CartContext from '../../context/StateContext'
import ProductIcon from '../../components/products/ProductIcon'

const shoes = () => {
    const {shoes} = useContext(CartContext)
    const slugs = shoes.map(s => s.slug.current)
    const uniqSlug = [...new Set(slugs)]
    const filteredShoes = uniqSlug.map(slug => {
      return shoes.find(s => s.slug.current === slug)
    })
  return (
      <InnerLayout>
      {filteredShoes.map(product => <ProductIcon product={product} />)}
    </InnerLayout>
  )
}

export default shoes