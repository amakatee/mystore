import React, { useState } from 'react'

const SingleCarousel = ({images}) => {
  
  return (
    <div className='flex-carousel'> 
        <div className='carousel-main-img'>
            <img src={images[0]}></img>

        </div>
        <div className='carousel-icon-img'>
            {images.map(img => (
                <div className='icon-image' >
                    <img  src={img}></img>
                </div>
            ))}

        </div>
    </div>
  )
}

export default SingleCarousel