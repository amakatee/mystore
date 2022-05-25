import React from 'react'
import TitleArrow from '../assets/TitleArrow'

const ThirdSection = () => {
  return (
    <div className='flex gap-5 third-section flex-start min-h-[100vh] ' >
      <div className='third-img-cont'>
        <img src='https://i.pinimg.com/736x/22/34/31/2234315ebe8d26b1928a7b4dd05993fd.jpg'></img>
      </div>
      <div className='ml-[7vw] third-title'>
      <p className='main-section-desc mb-[5px] '>
        Несколько лучших вариантов 

      </p>
      <div className='flex items-center gap-5'>
        <TitleArrow text="Одежда" color="#434343" />
        </div>  
       
      </div>
     
    </div>
  )
}

export default ThirdSection