import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import Carousel from './../assets/Carousel'
import TitleArrow from './../assets/TitleArrow'
import gsap from 'gsap/dist/gsap'
import Link from 'next/link'

const SecondSection = () => {
  const descript = useRef()
  useEffect (() => {
    const tl = gsap.timeline({
      defaults:{ duration: 1.6, ease:"Power3.easeOut"}

    })
    tl.fromTo(descript.current, {opacity:0, y:"-100%"}, {opacity: 1, y:0})


  },[])

  return (

    <div className='carousel-section ml-[7vw]' >
        <Link href='products/jewelry'>
        <div className='flex items-center gap-5  mt-[20vh]'>
        <TitleArrow text='украшения' color="#434343" />
        </div>
        </Link>

        <div className='carousel-cont'>
        
             <Carousel  />
        </div>
        <div >
          <p className='overflow-hidden' ><span ref={descript} className='block main-section-desc dark-color'>Украшения из позолоченого серебра </span> </p>
        </div>
        
   
  </div>
  )
}

export default SecondSection