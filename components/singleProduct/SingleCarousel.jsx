import React, { useState } from 'react'
import { urlFor } from '../../lib/client'

const SingleCarousel = ({images}) => {
    const [currentImg, setCurrentImage] = useState(0)
    const existinImg = images.find((img, index) => index === currentImg)
  
  return (
    <div className='flex-carousel'> 
        <div className='carousel-main-img'>
            <img src={urlFor(existinImg)}></img>

        </div>
        <div className='carousel-icon-img'>
            {images.map((img, index) => (
                <div className='cursor-pointer icon-image' onClick={() => setCurrentImage(index)}>
                    <img  src={urlFor(img)}></img>
                </div>
            ))}

        </div>
    </div>
  )
}

export default SingleCarousel