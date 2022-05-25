import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'

const Carousel = ({images}) => {
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    const [allowScroll, setAllowScroll] = useState(false)
    useEffect(() => {
      if (allowScroll) {
        const handleTouch = event => {
          event.stopPropagation()
        }
        document.documentElement.addEventListener('touchmove', handleTouch)
        return () => {
          document.documentElement.removeEventListener('touchmove', handleTouch)
        }
      }
    }, [allowScroll])
   
    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    }, [])

  return (
    <motion.div ref={carousel} className='main-carousel'>
        <motion.div  
        className='main-inner-carousel'
        drag='x'
        onDragStart={(event, info) => {
          setAllowScroll(Math.abs(info.delta.y) > Math.abs(info.delta.x))
        }}
        dragDirectionLock
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