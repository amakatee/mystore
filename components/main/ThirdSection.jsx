import React from 'react'
import TitleArrow from '../assets/TitleArrow'

const ThirdSection = () => {
  return (
    <div className='flex gap-5 third-section flex-start min-h-[100vh] ' >
      <div className='third-img-cont'>
        <img src='https://inej.s3.amazonaws.com/kushon.JPG?AWSAccessKeyId=AKIAXKBC4NRLRNTZZA7H&Signature=jayDp%2BmSTkHedyDrKKW3bIK9oJI%3D&Expires=1653417756'></img>
      </div>
      <div className='ml-[7vw] third-title'>
      <p className='main-section-desc mb-[5px] '>
        best of 2022

      </p>
      <div className='flex items-center gap-5'>
        <TitleArrow text="Dresses" color="#434343" />
        </div>  
       
      </div>
     
    </div>
  )
}

export default ThirdSection