import React from 'react'
import InnerLayout from '../../components/InnerLayout'
import { useContext } from 'react'
import CartContext from '../../context/StateContext'
import ProductIcon from '../../components/products/ProductIcon'

const clothing = () => {
    const {clothing} = useContext(CartContext)
    const slugs = clothing?.map(c => c.slug.current)
    const uniqSlug = [...new Set(slugs)]
    const filteredClothing = uniqSlug.map(slug => {
      return clothing.find(c => c.slug.current === slug)
    })

  return (
      <InnerLayout>
      {filteredClothing?.map(product => <ProductIcon product={product} />)}
    </InnerLayout>
  )
}

export default clothing