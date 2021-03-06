import React from 'react'
import NavbarDark from '../components/NavbarDark'
import CheckoutcartItem from './../components/checkout/CheckoutcartItem'
import { useContext, useRef, useEffect, useState } from 'react'
import CartContext from '../context/StateContext'
import {gsap} from 'gsap'
import axios from 'axios'
import {useForm } from 'react-hook-form'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link'


const checkout = () => {
    
    const {cartItems, qty, totalPrice} = useContext(CartContext)
    const itemsString = (cartItems.map(item => `Название:${item.title}, цвет: ${item.colorValue}, размер: ${item.sizeValue}, цена: ${item.price}, суммарно: ${totalPrice} рублей, кол-во: ${item.qty}.     ||      `))
   const i = itemsString.toString()
    const obj = {
        'products': i
    }
    
    const [formShow, setFormShow ] = useState(true)
    const [socialShow, setSocialShow ] = useState(false)

 const checkoutRef = useRef()
  useEffect(() => {
      gsap.fromTo(checkoutRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
  })
    
  const {register
    , formState: {
      errors
     },
     handleSubmit,
     reset
     } = useForm()

    const onSubmit = async (values) => {
      
        const data = {...values, ...obj}
      
     
         
         

         let config = {
            method: 'post',
            url:`/api/contact/`,
            headers: {
              'Content-type':'application/json'
            },
            data:data
      
          }
         try{
             const response = await axios(config)
             if(response.status == 200) {
                reset()
                setFormShow(false)
                setSocialShow(true)
             }

         }catch(err){
             console.log(err)}

     }

  return (
      <>
      <NavbarDark />
    <div className='pt-[15vh] width-[100vw] pb-[15vh]' ref={checkoutRef}>
        <div className='flex flex-col items-center gap-5 mx-auto width-90vw desktop-form'>
            <div className='checkout-items-cont'>  
            
                {cartItems.map(item=> (
                   
                    <CheckoutcartItem item={item} />
                ))}
           
            </div>
          
            <div>
            {formShow && 
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h1  className='address-title '>Адрес получателя:</h1>
                <label className='label-style'>
                    Имя: <br />
                <input 
                className='input-style'
                id="name"
                type="text"
                name="name"
                {...register("name")}
                required
                ></input>
                </label>

                <label className='label-style'>
                    Фамилия: <br />
                <input 
                className='input-style'
               
                type="text"
                name="familyname"
                {...register("familyname")}
                required
                ></input>
                </label>
                <label className='label-style'>
                    Город: <br/>
                <input 
                className='input-style'
                type="text"
                name="city"
                {...register("city")}
                required
                ></input>
                </label>
                <label className='label-style'>
                    Телефон: <br/>
                <input 
                className='input-style'
                type="text"
                
                name="phone"
                {...register("phone")}
               
                ></input>
                </label>
                <label className='label-style'>
                    Адресс: <br />
                <input 
                className='input-style'
            
                type="text"
                name="address"
                {...register("address")}
                required
                ></input>
                </label>
                <label className='label-style'>
                    Индекс: <br />
                <input 
                className='input-style'
                type="text"
                name="zip"
                {...register("zip")}
                required
                ></input>
                </label>
                <label className='label-style'>
                    Емэйл или мессенджер: <br />
                <input 
                className='input-style'
        
                type="text"
                name="email"
                {...register("email")}
                required
                ></input>
                </label>

                <button  className='checkout-btn-next' type="submit">Продолжить</button>
               
            </form>
              }
              {socialShow &&
           <div className='social-section'>
           <h1>Cпасибо за ваш заказ! Суммарно он составил {totalPrice} рублей.</h1>
           <p>Если вы не оставляли обаратный контакт свяжитесь с нами в  <a target='_blank' href='https://tlgg.ru/zininaa'><span className='link-tele'>телеграмм</span> .</a></p>
           <div сlassName='social-icon'>
             <a target='_blank' href='https://tlgg.ru/zininaa'> <p><FaTelegramPlane size={30} /></p> </a>
        
           </div>
       </div> }
        </div>
           
            
        </div>
    </div>
    </>
  )
}

export default checkout