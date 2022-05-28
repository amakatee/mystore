import React from 'react'
import NavbarDark from '../components/NavbarDark'

const shipping = () => {
  return (
      <>
      <NavbarDark />
      <div className='ship-info-cont pt-[15vh] dark-color'>
          <div className='ship-cont'>
              <h1>Доставка:</h1>
              <p> 1-4 недели Почтой России по РФ</p>
          </div>
          <div className='ship-cont'>
              <h1>Возврат:</h1>
              <p>На данный момент Возврат товаров невозможен. 
                 По всем возникшим вопросам свяжитесь в <span className='link-tele'>телеграмм.</span> </p>
          </div>
      </div>
      </>
 
  )
}

export default shipping