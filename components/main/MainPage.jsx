import React from 'react'
import TitleArrow from '../assets/TitleArrow'
import Link from 'next/link'
import { urlFor } from '../../lib/client'
import { useContext, useRef,useEffect } from 'react'
import CartContext  from '../../context/StateContext'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const MainPage = ({banner}) => {
  const {} = useContext(CartContext)
  const titleBox = useRef(null)

  const arrow = useRef(null)
  const video = useRef(null)
  console.log(banner.image)


  useEffect (() => {
  
    const tl = gsap.timeline({
      defaults:{ ease:"Power3.easeOut"},
     })
     tl.fromTo(video.current, {opacity:0}, {opacity: 1, duration: .5})
     tl.fromTo(titleBox.current, {opacity:0, y:"-100%"}, {opacity: 1, y:0, delay: .4})
     tl.fromTo(arrow.current, {opacity:0, y:"-100%"}, {opacity: 1, y:0})
    

    


  },[])



  


  return (
     <>
      <div className='image-main-container'>
        <div className='video-main-desktop'>
        <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className='vd-desk'>
            <source
            src='/backvideo.mp4'
            type='video/mp4'
            >
            </source>
          </video>
          </div>
                </div>
      <div className=' i-main-cont'>
        <img className=''  src={urlFor(banner.image)}></img>
      </div>
        <div ref={video} className='video-container'>
          <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
            <source
            src='/backvideo.mp4'
            type='video/mp4'
            >
            </source>
          </video>
        </div>
        <Link href='/products'>
        <div  className='absolute bottom-[120px] left-[7vw]  flex flex-col items-start gap-.5 ' >
 
          <h1 className='overflow-hidden'><span ref={titleBox}  className='text-white custom-font title-text gsap-text mb-[10px]'>СМОТРЕТЬ</span></h1>
         <div className='white-arrow w-[50px] overflow-hidden'>
         <span ref={arrow} className="block">
          <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='#fff' fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path>
          <path fill='#fff' d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path>
        </svg>
        </span>  
        </div> 
           
        </div>
        </Link>
        </>
       
  )
}

export default MainPage


