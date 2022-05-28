import React from 'react'
import NavbarDark from '../components/NavbarDark'
import CheckoutcartItem from './../components/checkout/CheckoutcartItem'
import { useContext } from 'react'
import CartContext from '../context/StateContext'

const checkout = () => {
    const {cartItems, qty} = useContext(CartContext)
    console.log(cartItems)

  return (
      <>
      <NavbarDark />
    <div className='pt-[15vh] width-[100vw] pb-[15vh]'>
        <div className='flex flex-col items-center gap-5 mx-auto width-90vw'>
            <div className='checkout-items-cont'>  
            
                {cartItems.map(item=> (
                   
                    <CheckoutcartItem item={item} />
                ))}
             
            </div>
            <div>
                <form className='form'>
                    <label className='label-style'>
                        Name: <br />
                    <input 
                    className='input-style'
                    id="name"
                    type="text"
                    name="name"
                    ></input>
                    </label>

                    <label className='label-style'>
                        Family: <br />
                    <input 
                    className='input-style'
                   
                    type="text"
                    name="familyname"
                    ></input>
                    </label>
                    <label className='label-style'>
                        City: <br/>
                    <input 
                    className='input-style'
                    type="text"
                    name="city"
                    ></input>
                    </label>
                    <label className='label-style'>
                        Phone: <br/>
                    <input 
                    className='input-style'
                
                    type="text"
                    name="phone"
                    ></input>
                    </label>
                    <label className='label-style'>
                        Address: <br />
                    <input 
                    className='input-style'
                
                    type="text"
                    name="address"
                    ></input>
                    </label>
                    <label className='label-style'>
                        Zip: <br />
                    <input 
                    className='input-style'
                
                    type="text"
                    name="zip"
                    ></input>
                    </label>
                    <label className='label-style'>
                        Email: <br />
                    <input 
                    className='input-style'
            
                    type="text"
                    name="email"
                    ></input>
                    </label>

                    <button className='checkout-btn-next' type="submit">Continiu</button>
                   
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default checkout