import {createContext, useEffect, useState} from "react"
import {client} from './../lib/client'

const CartContext = createContext()

export const StateContext = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])
  
    const fetchProducts = async () => {
        const query = `
        *[_type == 'product']{
           
            body,
            title,
            slug
 } `
        const products = await client.fetch(query)
      
        products.forEach(async (item) => {
            const newItem = {
                id: item.slug,
                body:item.body,
                title: item.title,
           
           
            }
            setProducts( prev => [...prev , newItem])

        })
    }


    return (
        <CartContext.Provider
        value={{
            products

        }}
        >
            {children}

        </CartContext.Provider>
    )
}
export default CartContext