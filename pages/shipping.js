import React from 'react'
import NavbarDark from '../components/NavbarDark'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const shipping = () => {
    const shipRef = useRef()
    useEffect(() => {
        gsap.fromTo(shipRef.current, {opacity: 0}, {opacity: 1, duration: 1.8})
    })

  return (
      <>
      <NavbarDark />
      <div ref={shipRef} className='ship-info-cont pt-[15vh] dark-color'>
          <div className='ship-cont'>
              <h1>Доставка:</h1>
              <p> 1-4 недели Почтой России по РФ</p>
          </div>
          <div className='ship-cont'>
              <h1>Возврат:</h1>
              <p>На данный момент Возврат товаров невозможен. 
                 По всем возникшим вопросам свяжитесь в  <a target='_blank' href='https://tlgg.ru/zininaa'> <span className='link-tele'>телеграмм.</span></a> </p>
          </div>
      </div>
      </>
 
  )
}

export default shipping