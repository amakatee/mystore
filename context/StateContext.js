import {createContext, useEffect, useState} from "react"
import {client} from './../lib/client'

const CartContext = createContext()

export const StateContext = ({children}) => {

    const [colorValue, setColorValue] = useState()
    const [sizeValue, setSizeValue] = useState()
    const [products, setProducts] = useState([])

    let qty = 0

    const [ cartItems , setCartItems] = useState([])

    useEffect(() => {
        fetchProducts()
    },[])

    const fetchProducts = async () => {
        const query = `
        *[_type == 'product']
        `
        const productsQuery = await client.fetch(query)
        setProducts(productsQuery)
    }
    

  
     const addTocart = ( product, colorValue, sizeValue) => {
        const existingItem =  cartItems?.find(i => i.slug.current === product.slug.current)
        if(existingItem) {
            setCartItems(cartItems.map(i => i.slug.current === product.slug.current ? {...existingItem, qty: existingItem.qty + 1} : i))
            existingItem.totalPrice =  existingItem.totalPrice + existingItem.price
        } else {
            setCartItems([...cartItems, {...product, colorValue:colorValue, sizeValue:sizeValue, qty:1}])
        
        }
        

    }
    const removeItem = (slug) => {
        const existingItem = cartItems?.find(i => i.slug.current === slug.current)
        if(existingItem) {
            setCartItems(cartItems.filter(i => i.slug.current !== existingItem.slug.current))
        }
    }   



   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
   const clothing = products.filter(item => item.category === 'clothing')
   const shoes = products.filter(item => item.category === 'shoes')
   const jewelry = products.filter(item => item.category === 'jewelry')


  

    

    return (
        <CartContext.Provider
        value={{
            colorValue,
            sizeValue,
            setColorValue,
            setSizeValue,
            totalPrice,
            cartItems,
            qty,
            removeItem,
            addTocart,
            jewelry,
            shoes,
            clothing

        }}
        >
            {children}

        </CartContext.Provider>
    )
}
export default CartContext