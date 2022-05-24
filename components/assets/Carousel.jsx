import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'

const Carousel = ({images}) => {
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    }, [])

  return (
    <motion.div ref={carousel} className='main-carousel'>
        <motion.div  
        className='main-inner-carousel'
        drag='x'
        dragConstraints={{right:0, left: -width}}
        >

            {images.map(img => {
               return ( <motion.div className='main-item '>
                  <div key={img} className='main-img-cont'>
                      <img src={img}></img>
                  </div>
                </motion.div>
            )})}
        </motion.div>

    </motion.div>
  )
}

export default Carousel