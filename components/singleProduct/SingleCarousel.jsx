import React, { useState, useEffect, useRef } from 'react'
import { urlFor } from '../../lib/client'

import {gsap } from 'gsap'

const SingleCarousel = ({images}) => {
    const [currentImg, setCurrentImage] = useState(0)
    const existinImg = images.find((img, index) => index === currentImg)
    const imageRef = useRef()
    useEffect(() => {
        gsap.fromTo(imageRef.current, {opacity:.5} , {opacity:1 , duration:1.5})
     
    })
  return (
    <div className='flex-carousel'> 
        <div className='carousel-main-img'>
            <img ref={imageRef} src={urlFor(existinImg)}></img>

        </div>
        <div  className='carousel-icon-img'>
            {images.map((img, index) => (
                <div  className='cursor-pointer icon-image' onClick={() => setCurrentImage(index)}>
                    <img  src={urlFor(img)}></img>
                </div>
            ))}

        </div>
    </div>
  )
}

export default SingleCarousel